<script setup lang="ts">
defineProps<{ color?: string }>()
</script>

<template>
  <div class="slidev-layout panel">
    <div class="panel-inner">
      <div v-if="color" class="quote" :class="color"><slot /></div>
      <slot v-else />
    </div>
  </div>
</template>
