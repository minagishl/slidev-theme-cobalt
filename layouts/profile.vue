<script setup lang="ts">
defineProps<{ header?: string }>()
</script>

<template>
  <div class="slidev-layout frame profile">
    <div class="frame-content">
      <div class="profile-inner">
        <div v-if="header" class="frame-header">{{ header }}</div>
        <slot />
      </div>
    </div>
  </div>
</template>
