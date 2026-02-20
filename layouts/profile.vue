<script setup lang="ts">
defineProps<{ header?: string }>()
</script>

<template>
  <div class="slidev-layout frame profile">
    <div class="frame-content">
      <div class="profile-inner">
        <div v-if="header" class="frame-header">{{ header }}</div>
        <div class="profile-name"><slot name="name" /></div>
        <div class="profile-body"><slot /></div>
      </div>
    </div>
  </div>
</template>
