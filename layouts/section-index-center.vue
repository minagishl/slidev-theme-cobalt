<script setup lang="ts">
defineProps<{
  number: string | number
}>()
</script>

<template>
  <div class="slidev-layout section-index-center">
    <div class="section-index-center-index">{{ number }}</div>
    <div class="section-index-center-content">
      <slot />
    </div>
  </div>
</template>
