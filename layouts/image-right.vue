<script setup lang="ts">
defineProps<{ image: string; alt?: string; label?: string }>()
</script>

<template>
  <div class="slidev-layout frame image-text image-right">
    <div class="frame-content image-text-inner">
      <div class="image-col">
        <img :src="image" :alt="alt" />
        <div v-if="label" class="image-label">{{ label }}</div>
      </div>
      <div class="content-col"><slot /></div>
    </div>
  </div>
</template>
