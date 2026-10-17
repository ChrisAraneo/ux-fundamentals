<script lang="ts">
// Rendered in the aside-top slot. The pattern fills the page margin to the right of the outline column, mirroring the
// one beside the sidebar. That margin lies outside every theme element, so the pattern goes on a fixed layer of its
// own, appended to <body> and styled as .AsideBackground in custom.css

// One pattern for the whole visit, so it stays the same while moving between pages
const seed = Math.floor(Math.random() * 2 ** 32)
</script>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { MARGIN_COLORS, renderStaticSymmetryArt, type SymmetryArt } from './symmetry-art'

const marker = ref<HTMLElement>()
let region: HTMLDivElement | undefined
let container: HTMLElement | null | undefined
let art: SymmetryArt | undefined

// The layer starts at the outline column's right edge; the column is hidden on narrow screens
function place() {
  if (!region || !container) return
  const box = container.getBoundingClientRect()
  const hidden = box.width === 0 || box.right >= document.documentElement.clientWidth
  region.style.display = hidden ? 'none' : ''
  region.style.left = `${box.right}px`
}

onMounted(() => {
  container = marker.value?.closest<HTMLElement>('.aside-container')
  if (!container) return
  region = document.createElement('div')
  region.className = 'AsideBackground'
  document.body.append(region)
  place()
  art = renderStaticSymmetryArt(region, MARGIN_COLORS, seed)
  window.addEventListener('resize', place)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', place)
  art?.destroy()
  region?.remove()
})
</script>

<template>
  <span ref="marker" hidden />
</template>
