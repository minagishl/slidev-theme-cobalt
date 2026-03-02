<script setup lang="ts">
import { useNav } from '@slidev/client'
import Label from './Label.vue'

withDefaults(
  defineProps<{
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    showTotal?: boolean
  }>(),
  { position: 'bottom-right', showTotal: false }
)

const { currentPage, total } = useNav()
</script>

<template>
  <Label :position="position">
    {{ currentPage }}<template v-if="showTotal"> / {{ total }}</template>
  </Label>
</template>
