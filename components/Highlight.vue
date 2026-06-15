<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'blue' | 'amber'
  }>(),
  {
    variant: 'blue',
  }
)
</script>

<template>
  <mark class="theme-highlight" :class="`theme-highlight--${variant}`">
    <slot />
  </mark>
</template>
