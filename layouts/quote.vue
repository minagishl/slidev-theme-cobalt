<script setup lang="ts">
defineProps<{ color?: string }>()
</script>

<template>
  <div class="slidev-layout frame quote-layout">
    <div class="frame-content quote-layout-inner">
      <div class="quote" :class="color ?? 'blue'"><slot /></div>
      <div v-if="$slots.source" class="quote-source"><slot name="source" /></div>
    </div>
  </div>
</template>
