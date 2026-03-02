<script setup lang="ts">
withDefaults(defineProps<{ cols?: 2 | 3 }>(), { cols: 2 })
</script>

<template>
  <div class="slidev-layout frame cols-layout" :class="`cols-${cols}`">
    <div class="frame-content cols-inner">
      <div class="cols-col"><slot name="left" /></div>
      <div v-if="cols === 3" class="cols-col"><slot name="middle" /></div>
      <div class="cols-col"><slot name="right" /></div>
    </div>
  </div>
</template>
