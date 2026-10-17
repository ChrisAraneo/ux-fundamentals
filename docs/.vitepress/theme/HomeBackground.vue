<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { createSymmetryArt, type SymmetryArt } from './symmetry-art'

const canvas = ref<HTMLCanvasElement>()
let art: SymmetryArt | undefined

// Rendered in the home-hero-before slot, so the hero title already exists when this mounts
onMounted(() => {
  const title = document.querySelector<HTMLElement>('.VPHero .name')
  if (canvas.value && title) art = createSymmetryArt(canvas.value, title)
})

onBeforeUnmount(() => art?.destroy())
</script>

<template>
  <div class="HomeBackground" aria-hidden="true">
    <canvas ref="canvas" />
  </div>
</template>

<style scoped>
/* Positioned from the top of the page, so the pattern scrolls together with the hero title */
.HomeBackground {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
}

canvas {
  display: block;
  width: 100%;
  transition: opacity 1.5s ease;
}
</style>
