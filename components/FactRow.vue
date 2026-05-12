<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="fact-row">
    <div class="fact-row-label">{{ label }}</div>
    <div class="fact-row-value">
      <slot />
    </div>
  </div>
</template>
