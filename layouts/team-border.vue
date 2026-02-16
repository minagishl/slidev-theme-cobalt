<template>
  <div class="slidev-layout panel team team-border" :class="teamClass" ref="teamRef">
    <div class="panel-inner" ref="panelInnerRef">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'

const teamRef = ref<HTMLElement | null>(null)
const panelInnerRef = ref<HTMLElement | null>(null)
const memberCount = ref(0)

const updateMemberCount = () => {
  if (panelInnerRef.value) {
    const members = panelInnerRef.value.querySelectorAll('.member')
    memberCount.value = members.length
  }
}

onMounted(() => {
  nextTick(() => {
    updateMemberCount()
    // Watch for changes in case content is loaded asynchronously
    const observer = new MutationObserver(() => {
      updateMemberCount()
    })
    if (panelInnerRef.value) {
      observer.observe(panelInnerRef.value, {
        childList: true,
        subtree: true,
      })
    }
  })
})

const teamClass = computed(() => {
  const count = memberCount.value
  if (count < 3) return ''

  // Add class according to the number of members
  const classes = [`team-count-${count}`]

  // If divisible by 4: 2 columns layout (e.g., 2+2, 4+4)
  if (count % 4 === 0) {
    classes.push('team-cols-2')
  }
  // If divisible by 3: 3 columns layout (e.g., 3+3, 6+3)
  else if (count % 3 === 0) {
    classes.push('team-cols-3')
  }
  // Otherwise: 3 columns, with more on top and less centered on bottom
  else {
    classes.push('team-cols-3', 'team-center-bottom')
  }

  return classes.join(' ')
})
</script>
