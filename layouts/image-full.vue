<script setup lang="ts">
defineProps<{
  image: string
  alt?: string
  dim?: boolean
}>()
</script>

<template>
  <div class="slidev-layout image-full-layout">
    <img :src="image" :alt="alt ?? ''" class="image-full-bg" />
    <div v-if="dim" class="image-full-dim" />
    <div class="image-full-content">
      <slot />
    </div>
  </div>
</template>
