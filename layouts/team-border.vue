<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  members: Array<{ name: string; img: string }>
}>()

const teamClass = computed(() => {
  const count = props.members.length
  if (count < 3) return ''

  const classes = [`team-count-${count}`]

  if (count % 4 === 0) {
    classes.push('team-cols-2')
  } else if (count % 3 === 0) {
    classes.push('team-cols-3')
  } else {
    classes.push('team-cols-3', 'team-center-bottom')
  }

  return classes.join(' ')
})
</script>

<template>
  <div class="slidev-layout panel team team-border" :class="teamClass">
    <div class="panel-inner">
      <div v-for="member in members" :key="member.name" class="member">
        <img :src="member.img" />
        <div class="name">{{ member.name }}</div>
      </div>
    </div>
  </div>
</template>
