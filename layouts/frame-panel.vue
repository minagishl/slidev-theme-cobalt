<script setup lang="ts">
defineProps<{ color?: string; align?: 'left' | 'center' | 'right' }>()
</script>

<template>
  <div class="slidev-layout frame frame-center" :class="`frame-align-${align ?? 'center'}`">
    <div class="frame-content">
      <div class="quote" :class="color ?? 'blue'"><slot /></div>
    </div>
  </div>
</template>
