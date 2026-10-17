<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { renderStaticSymmetryArt, type SymmetryArt } from './symmetry-art'

// Rendered in the sidebar-nav-before slot; the pattern itself goes on the whole sidebar as a background image
const marker = ref<HTMLElement>()
let art: SymmetryArt | undefined

onMounted(() => {
  const sidebar = marker.value?.closest<HTMLElement>('.VPSidebar')
  if (sidebar) art = renderStaticSymmetryArt(sidebar, { light: '#f6f6f7', dark: '#161618' })
})

onBeforeUnmount(() => art?.destroy())
</script>

<template>
  <span ref="marker" hidden />
</template>
