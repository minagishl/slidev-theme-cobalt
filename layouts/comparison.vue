<script setup lang="ts">
defineProps<{
  leftTitle?: string
  rightTitle?: string
}>()
</script>

<template>
  <div class="slidev-layout frame comparison-layout">
    <div class="frame-content comparison-content">
      <div class="comparison-col">
        <div v-if="leftTitle" class="comparison-title">{{ leftTitle }}</div>
        <div class="comparison-body"><slot name="left" /></div>
      </div>
      <div class="comparison-divider" />
      <div class="comparison-col">
        <div v-if="rightTitle" class="comparison-title">{{ rightTitle }}</div>
        <div class="comparison-body"><slot name="right" /></div>
      </div>
    </div>
  </div>
</template>
