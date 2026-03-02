<script setup lang="ts">
withDefaults(
  defineProps<{
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  }>(),
  { position: 'bottom-left' }
)
</script>

<template>
  <div class="slide-note" :class="`slide-note-${position}`">
    <slot />
  </div>
</template>
