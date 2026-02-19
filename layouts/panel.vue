<script setup lang="ts">
defineProps<{ color?: string; heading?: string; align?: 'left' | 'center' | 'right' }>()
</script>

<template>
  <div class="slidev-layout panel" :class="`panel-align-${align ?? 'center'}`">
    <div class="panel-inner">
      <div v-if="heading" class="license-block">
        <div class="license-title">{{ heading }}</div>
        <slot />
      </div>
      <div v-else-if="color" class="quote" :class="color"><slot /></div>
      <slot v-else />
    </div>
  </div>
</template>
