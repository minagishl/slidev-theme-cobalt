<script setup lang="ts">
type KbdIcon = 'command' | 'arrow-up' | 'arrow-down' | 'arrow-left' | 'arrow-right'

defineProps<{
  icon?: KbdIcon
}>()
</script>

<template>
  <kbd class="theme-kbd">
    <span
      v-if="icon"
      class="theme-kbd-icon"
      :class="`theme-kbd-icon--${icon}`"
      :aria-label="icon"
      role="img"
    />
    <slot v-else />
  </kbd>
</template>
