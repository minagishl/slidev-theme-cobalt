<script setup lang="ts">
defineProps<{
  number: string | number
}>()
</script>

<template>
  <div class="slidev-layout section-index">
    <div class="section-index-index">{{ number }}</div>
    <div class="section-index-content">
      <slot />
    </div>
  </div>
</template>
