<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'solid' | 'muted' | 'dashed'
    spacing?: 'sm' | 'md' | 'lg'
  }>(),
  {
    variant: 'solid',
    spacing: 'md',
  }
)
</script>

<template>
  <hr
    class="theme-divider"
    :class="[`theme-divider--${variant}`, `theme-divider--spacing-${spacing}`]"
  />
</template>
