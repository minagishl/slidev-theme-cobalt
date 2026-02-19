<script setup lang="ts">
defineProps<{ header?: string; color?: string; align?: 'left' | 'center' | 'right' }>()
</script>

<template>
  <div class="slidev-layout frame frame-center" :class="`frame-align-${align ?? 'center'}`">
    <div class="frame-content">
      <div v-if="header" class="frame-header">{{ header }}</div>
      <div class="quote" :class="color ?? 'blue'"><slot /></div>
    </div>
  </div>
</template>
