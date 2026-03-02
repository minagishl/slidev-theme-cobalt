<script setup lang="ts">
defineProps<{
  image: string
  alt?: string
  dim?: boolean
  color?: 'blue' | 'white'
}>()
</script>

<template>
  <div class="slidev-layout frame image-full-layout" :class="`image-full-${color ?? 'blue'}`">
    <div class="frame-content image-full-inner">
      <div class="image-full-box">
        <img :src="image" :alt="alt ?? ''" class="image-full-bg" />
        <div v-if="dim" class="image-full-dim" />
        <div class="image-full-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
