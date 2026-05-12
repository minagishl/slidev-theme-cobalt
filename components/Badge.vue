<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'solid' | 'soft' | 'outline'
  }>(),
  {
    variant: 'solid',
  }
)
</script>

<template>
  <span class="theme-badge" :class="`theme-badge--${variant}`">
    <slot />
  </span>
</template>
