// Kaleidoscopic line art for the home page background.
//
// Every stroke is generated once inside a single wedge of the circle (angles 0 to PI / folds) and then
// repeated by the dihedral symmetry group: `folds` rotations, each drawn as-is and mirrored. All lines are straight
// and run at multiples of 15 degrees. Strokes are revealed progressively, held for a moment, faded out, and replaced
// by a new pattern.

type Point = [number, number]

interface Stroke {
  // Polyline in pattern units, where 1 is the pattern radius
  points: Point[]
  width: number
  // Fraction of the drawing phase at which this stroke starts, and how long it takes
  delay: number
  span: number
  // Number of segments already on the canvas
  drawn: number
}

interface Pattern {
  folds: number
  strokes: Stroke[]
}

const DRAW_MS = 11000
const HOLD_MS = 7000
const FADE_MS = 1600
const MAX_FRAME_MS = 100

// Strokes are fully opaque, so they come out in exactly these colors; they differ only in width
const COLORS = { light: '#f6f6f7', dark: '#202127' }

// Small seeded PRNG, so a pattern can be regenerated identically after a resize
function mulberry32(seed: number): () => number {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function polar(r: number, angle: number): Point {
  return [r * Math.cos(angle), r * Math.sin(angle)]
}

function between(rand: () => number, min: number, max: number): number {
  return min + rand() * (max - min)
}

function pick<T>(rand: () => number, items: T[]): T {
  return items[Math.floor(rand() * items.length)]
}

// Every line in the pattern runs at a multiple of 15 degrees
const ANGLE_STEP = Math.PI / 12

// Fold counts whose wedge edges reflect a 15 degree direction onto another one (2 * 180 / folds is a multiple of 15)
const FOLDS = [4, 6, 6, 8, 8, 12, 12]

// Distance between sampled points along a line, so lines are revealed smoothly
const SAMPLE = 0.008

function snap(angle: number): number {
  return Math.round(angle / ANGLE_STEP) * ANGLE_STEP
}

function gridAngle(rand: () => number): number {
  return Math.floor(rand() * 24) * ANGLE_STEP
}

function sampleLine([x1, y1]: Point, [x2, y2]: Point): Point[] {
  const count = Math.max(2, Math.ceil(Math.hypot(x2 - x1, y2 - y1) / SAMPLE))
  const points: Point[] = []
  for (let i = 0; i <= count; i++) {
    const t = i / count
    points.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t])
  }
  return points
}

// Straight legs that turn by 15 to 90 degrees between them. A leg that hits a wedge edge reflects off it, which keeps
// it on the 15 degree grid and joins it seamlessly with its mirror image
function gridWalk(
  rand: () => number,
  wedge: number,
  start: Point,
  legs: number,
  legLength: [number, number]
): Point[] {
  let [x, y] = start
  let heading = gridAngle(rand)
  const points: Point[] = [[x, y]]

  for (let leg = 0; leg < legs; leg++) {
    if (leg > 0) heading += pick(rand, [-1, 1]) * Math.ceil(rand() * 6) * ANGLE_STEP
    const length = between(rand, legLength[0], legLength[1])
    const steps = Math.max(2, Math.round(length / SAMPLE))

    for (let i = 0; i < steps; i++) {
      x += (length / steps) * Math.cos(heading)
      y += (length / steps) * Math.sin(heading)

      let r = Math.hypot(x, y)
      let angle = Math.atan2(y, x)
      if (angle < 0) {
        angle = -angle
        heading = -heading
      } else if (angle > wedge) {
        angle = 2 * wedge - angle
        heading = 2 * wedge - heading
      }
      // At the rim or the center, turn back along the nearest grid direction
      if (r > 0.97) {
        r = 0.97
        heading = snap(angle + Math.PI)
      } else if (r < 0.04) {
        r = 0.04
        heading = snap(angle)
      }
      ;[x, y] = polar(r, angle)
      points.push([x, y])
    }
  }
  return points
}

// A long wandering line of short legs
function walker(rand: () => number, wedge: number): Point[] {
  const start = polar(between(rand, 0.1, 0.7), rand() * wedge)
  return gridWalk(rand, wedge, start, Math.floor(between(rand, 10, 24)), [0.03, 0.12])
}

// A few long legs starting on a wedge edge; mirrored, they form chevrons, brackets and steps
function bracket(rand: () => number, wedge: number): Point[] {
  const start = polar(between(rand, 0.1, 0.85), pick(rand, [0, wedge]))
  return gridWalk(rand, wedge, start, Math.floor(between(rand, 2, 5)), [0.06, 0.2])
}

// A triangle, square or hexagon sitting on a wedge edge; the symmetry turns it into a ring of polygons
function polygon(rand: () => number, wedge: number): Point[] {
  const distance = between(rand, 0.2, 0.85)
  const [cx, cy] = polar(distance, pick(rand, [0, wedge]))
  const radius = distance * Math.sin(wedge) * between(rand, 0.3, 1)
  const sides = pick(rand, [3, 4, 4, 6])
  // Rotating the corners by a multiple of 15 degrees keeps the edges on the grid too
  const rotation = gridAngle(rand)
  const points: Point[] = []
  for (let i = 0; i < sides; i++) {
    const [ax, ay] = polar(radius, rotation + (i / sides) * Math.PI * 2)
    const [bx, by] = polar(radius, rotation + ((i + 1) / sides) * Math.PI * 2)
    const edge = sampleLine([cx + ax, cy + ay], [cx + bx, cy + by])
    points.push(...(i === 0 ? edge : edge.slice(1)))
  }
  return points
}

// A straight line from one wedge edge to the other at a grid angle; the symmetry turns it into a star polygon
function chord(rand: () => number, wedge: number): Point[] {
  for (let attempt = 0; attempt < 20; attempt++) {
    const r1 = between(rand, 0.15, 0.95)
    const heading = gridAngle(rand)
    // Where the line from (r1, 0) along `heading` crosses the edge at angle `wedge`
    const cross = Math.sin(heading - wedge)
    if (Math.abs(cross) < 1e-6) continue
    const r2 = (r1 * Math.sin(heading)) / Math.sin(heading - wedge)
    const along = (r1 * Math.sin(wedge)) / Math.sin(heading - wedge)
    if (along > 0 && r2 > 0.15 && r2 < 0.98) return sampleLine(polar(r1, 0), polar(r2, wedge))
  }
  return spoke(rand, wedge)
}

// A radial line along a wedge edge
function spoke(rand: () => number, wedge: number): Point[] {
  const angle = pick(rand, [0, wedge])
  const r1 = between(rand, 0.05, 0.6)
  return sampleLine(polar(r1, angle), polar(Math.min(r1 + between(rand, 0.15, 0.5), 0.98), angle))
}

function createPattern(seed: number): Pattern {
  const rand = mulberry32(seed)
  const folds = pick(rand, FOLDS)
  const wedge = Math.PI / folds
  const strokes: Stroke[] = []

  const add = (count: number, make: typeof walker, width: number, delay: [number, number]) => {
    for (let i = 0; i < count; i++) {
      const start = between(rand, delay[0], delay[1])
      strokes.push({
        points: make(rand, wedge),
        width: width * between(rand, 0.7, 1.3),
        delay: start,
        span: between(rand, 0.4, 1 - start),
        drawn: 0
      })
    }
  }

  // The geometric scaffold appears first, the wandering lines grow over it
  add(Math.floor(between(rand, 2, 5)), chord, 2.4, [0, 0.25])
  add(Math.floor(between(rand, 1, 3)), spoke, 2.4, [0, 0.2])
  add(Math.floor(between(rand, 1, 3)), polygon, 3, [0.05, 0.35])
  add(Math.floor(between(rand, 2, 5)), bracket, 3.6, [0.1, 0.45])
  add(Math.floor(between(rand, 2, 4)), walker, 3.2, [0.15, 0.5])

  return { folds, strokes }
}

export interface SymmetryArt {
  destroy(): void
}

// Where a pattern lands on a canvas: its center and radius in CSS pixels, and the canvas pixel density
interface Placement {
  centerX: number
  centerY: number
  radius: number
  dpr: number
}

interface ThemeColors {
  light: string
  dark: string
}

// VitePress puts the `dark` class on <html> in dark mode
function themeColor(colors: ThemeColors = COLORS): string {
  return document.documentElement.classList.contains('dark') ? colors.dark : colors.light
}

// Strokes the segments [from, to) of a stroke in every rotation and its mirror
function paintSegments(
  ctx: CanvasRenderingContext2D,
  pattern: Pattern,
  stroke: Stroke,
  from: number,
  to: number,
  { centerX, centerY, radius, dpr }: Placement,
  color: string
) {
  const path = new Path2D()
  path.moveTo(stroke.points[from][0], stroke.points[from][1])
  for (let i = from + 1; i <= to; i++) path.lineTo(stroke.points[i][0], stroke.points[i][1])

  // A line may be drawn in several pieces; square caps fill the corner where two pieces meet, and since strokes are
  // opaque the overlap does not show
  ctx.lineCap = 'square'
  ctx.lineJoin = 'miter'
  ctx.strokeStyle = color
  ctx.lineWidth = stroke.width / radius
  const scale = radius * dpr
  for (let k = 0; k < pattern.folds; k++) {
    const angle = (k * 2 * Math.PI) / pattern.folds
    const cos = Math.cos(angle) * scale
    const sin = Math.sin(angle) * scale
    // Rotation, then rotation of the mirror image (y flipped before rotating)
    ctx.setTransform(cos, sin, -sin, cos, centerX * dpr, centerY * dpr)
    ctx.stroke(path)
    ctx.setTransform(cos, sin, sin, -cos, centerX * dpr, centerY * dpr)
    ctx.stroke(path)
  }
}

// The pattern is centered on `anchor` and the canvas grows tall enough to hold all of it, up to the end of the page
export function createSymmetryArt(canvas: HTMLCanvasElement, anchor: HTMLElement): SymmetryArt {
  const ctx = canvas.getContext('2d')!
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  let pattern = createPattern(Math.floor(Math.random() * 2 ** 32))
  let phase: 'draw' | 'hold' | 'fade' = 'draw'
  let elapsed = 0
  let lastTime = 0
  let frame = 0
  let placement: Placement = { centerX: 0, centerY: 0, radius: 1, dpr: 1 }
  let color = themeColor()

  // The page layout, whose bottom edge the canvas must not extend past (that would add empty scroll space)
  const page = canvas.closest<HTMLElement>('.Layout') ?? document.body

  function layout() {
    const width = canvas.clientWidth
    const radius = width >= 960 ? Math.min(width * 0.72, window.innerHeight * 1.24) : Math.max(width * 1.24, 440)

    const box = canvas.getBoundingClientRect()
    const target = anchor.getBoundingClientRect()
    const centerX = target.left + target.width / 2 - box.left
    const centerY = target.top + target.height / 2 - box.top

    const height = Math.ceil(Math.min(centerY + radius + 8, page.getBoundingClientRect().bottom - box.top))
    canvas.style.height = `${height}px`
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    placement = { centerX, centerY, radius, dpr }
  }

  function targetSegment(stroke: Stroke, progress: number): number {
    const local = Math.min(Math.max((progress - stroke.delay) / stroke.span, 0), 1)
    // Ease out, so lines slow down as they settle
    const eased = 1 - (1 - local) ** 2
    return Math.floor(eased * (stroke.points.length - 1))
  }

  function advance(progress: number) {
    for (const stroke of pattern.strokes) {
      const target = targetSegment(stroke, progress)
      if (target > stroke.drawn) {
        paintSegments(ctx, pattern, stroke, stroke.drawn, target, placement, color)
        stroke.drawn = target
      }
    }
  }

  // Repaints everything drawn so far, after a resize or a theme change
  function repaint() {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const progress = phase === 'draw' ? elapsed / DRAW_MS : 1
    for (const stroke of pattern.strokes) stroke.drawn = 0
    advance(progress)
  }

  function nextPattern() {
    pattern = createPattern(Math.floor(Math.random() * 2 ** 32))
    phase = 'draw'
    elapsed = 0
    canvas.style.opacity = '1'
    repaint()
  }

  function tick(time: number) {
    const delta = lastTime ? Math.min(time - lastTime, MAX_FRAME_MS) : 0
    lastTime = time
    elapsed += delta

    if (phase === 'draw') {
      advance(Math.min(elapsed / DRAW_MS, 1))
      if (elapsed >= DRAW_MS) {
        phase = 'hold'
        elapsed = 0
      }
    } else if (phase === 'hold' && elapsed >= HOLD_MS) {
      phase = 'fade'
      elapsed = 0
      canvas.style.opacity = '0'
    } else if (phase === 'fade' && elapsed >= FADE_MS) {
      nextPattern()
    }
    frame = requestAnimationFrame(tick)
  }

  function start() {
    cancelAnimationFrame(frame)
    lastTime = 0
    if (reducedMotion.matches) {
      // A single finished pattern, without any animation
      phase = 'hold'
      canvas.style.opacity = '1'
      repaint()
    } else {
      frame = requestAnimationFrame(tick)
    }
  }

  let resizeTimer = 0
  const resizeObserver = new ResizeObserver(() => {
    clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(() => {
      layout()
      repaint()
    }, 150)
  })

  // Redraws in the other color when the theme is switched
  const themeObserver = new MutationObserver(() => {
    color = themeColor()
    repaint()
  })

  layout()
  // The anchor moves when the viewport changes or a web font swaps in
  resizeObserver.observe(canvas)
  resizeObserver.observe(anchor)
  resizeObserver.observe(page)
  reducedMotion.addEventListener('change', start)
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  start()

  return {
    destroy() {
      cancelAnimationFrame(frame)
      clearTimeout(resizeTimer)
      resizeObserver.disconnect()
      reducedMotion.removeEventListener('change', start)
      themeObserver.disconnect()
    }
  }
}

// A finished pattern, drawn all at once and never erased, exposed on `element` as the `--symmetry-art` custom property
// for its CSS to use as a background image. A CSS background stays in place while the element's own content scrolls,
// so this suits a scrolling panel like the sidebar.
export function renderStaticSymmetryArt(element: HTMLElement, colors: ThemeColors = COLORS): SymmetryArt {
  const pattern = createPattern(Math.floor(Math.random() * 2 ** 32))
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  let url = ''
  let version = 0
  let destroyed = false

  function render() {
    const width = element.clientWidth
    const height = element.clientHeight
    if (!width || !height) return

    // Setting the size also clears the canvas
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    const placement = { centerX: width / 2, centerY: height / 2, radius: Math.max(width, height / 2), dpr }
    const color = themeColor(colors)
    for (const stroke of pattern.strokes) {
      paintSegments(ctx, pattern, stroke, 0, stroke.points.length - 1, placement, color)
    }

    // toBlob is asynchronous, so ignore a result that a newer render has already replaced
    const current = ++version
    canvas.toBlob((blob) => {
      if (!blob || destroyed || current !== version) return
      URL.revokeObjectURL(url)
      url = URL.createObjectURL(blob)
      element.style.setProperty('--symmetry-art', `url(${url})`)
    })
  }

  let resizeTimer = 0
  const resizeObserver = new ResizeObserver(() => {
    clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(render, 150)
  })

  // Redraws in the other color when the theme is switched
  const themeObserver = new MutationObserver(render)

  render()
  resizeObserver.observe(element)
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  return {
    destroy() {
      destroyed = true
      clearTimeout(resizeTimer)
      resizeObserver.disconnect()
      themeObserver.disconnect()
      URL.revokeObjectURL(url)
      element.style.removeProperty('--symmetry-art')
    }
  }
}
