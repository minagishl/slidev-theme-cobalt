<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'info' | 'warn' | 'alert'
  }>(),
  {
    type: 'info',
  }
)
</script>

<template>
  <div class="note-block" :class="`note-block--${props.type}`">
    <span class="note-block-icon" aria-hidden="true">
      <span
        class="note-block-icon-inner"
        :class="{
          'note-block-icon-inner--info': props.type === 'info',
          'note-block-icon-inner--warn': props.type === 'warn',
          'note-block-icon-inner--alert': props.type === 'alert',
        }"
      />
    </span>
    <div class="note-block-body">
      <slot />
    </div>
  </div>
</template>
