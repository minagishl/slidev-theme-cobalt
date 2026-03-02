<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  activeIndex?: number
}>()

const contentRef = ref<HTMLElement | null>(null)

const applyActiveState = async () => {
  await nextTick()

  const root = contentRef.value
  if (!root) return

  const list = root.querySelector('ol')
  if (!list) return

  list.classList.remove('toc-has-active')
  list.querySelectorAll('.toc-active').forEach((el) => {
    el.classList.remove('toc-active')
  })

  const index = props.activeIndex
  if (!index || index < 1) return

  const items = Array.from(list.children) as HTMLElement[]
  const target = items[index - 1]
  if (!target) return

  list.classList.add('toc-has-active')
  target.classList.add('toc-active')
}

onMounted(applyActiveState)

watch(
  () => props.activeIndex,
  () => {
    applyActiveState()
  }
)
</script>

<template>
  <div class="slidev-layout frame toc">
    <div ref="contentRef" class="frame-content">
      <slot />
    </div>
  </div>
</template>
