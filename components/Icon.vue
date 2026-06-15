<script setup lang="ts">
import { computed } from 'vue'

/** Keep in sync with the lucide-static dependency in package.json */
const LUCIDE_STATIC_VERSION = '0.576.0'
const LUCIDE_ICON_CDN = `https://cdn.jsdelivr.net/npm/lucide-static@${LUCIDE_STATIC_VERSION}/icons`

const props = withDefaults(
  defineProps<{
    name: string
    size?: 'sm' | 'md' | 'lg'
    label?: string
  }>(),
  {
    size: 'md',
  }
)

const iconStyle = computed(() => {
  const url = `url('${LUCIDE_ICON_CDN}/${props.name}.svg')`
  return {
    '--icon-url': url,
  }
})
</script>

<template>
  <span
    class="theme-icon"
    :class="`theme-icon--${size}`"
    :style="iconStyle"
    role="img"
    :aria-label="label ?? name"
  />
</template>
