<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    size?: 'sm' | 'md' | 'lg'
    label?: string
  }>(),
  {
    size: 'md',
  }
)
</script>

<template>
  <span
    class="theme-icon"
    :class="`theme-icon--${size}`"
    :style="{ '--icon-url': `url('lucide-static/icons/${name}.svg')` }"
    role="img"
    :aria-label="label ?? name"
  />
</template>
