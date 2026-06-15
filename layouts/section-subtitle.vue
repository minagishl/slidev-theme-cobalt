<script setup lang="ts">
defineProps<{
  subtitle?: string
  number?: string | number
}>()
</script>

<template>
  <div class="slidev-layout section-subtitle">
    <div v-if="number != null && number !== ''" class="section-subtitle-number">{{ number }}</div>
    <div class="section-subtitle-content">
      <slot />
      <p v-if="subtitle" class="section-subtitle-desc">{{ subtitle }}</p>
    </div>
  </div>
</template>
