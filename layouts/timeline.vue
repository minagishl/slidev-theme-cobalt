<script setup lang="ts">
defineProps<{
  events: { date: string; title: string; description?: string }[]
}>()
</script>

<template>
  <div class="slidev-layout frame timeline-layout">
    <div class="frame-content timeline-content">
      <slot />
      <div class="timeline-wrapper">
        <div class="timeline-track" />
        <div class="timeline-items">
          <div v-for="event in events" :key="event.date" class="timeline-item">
            <div class="timeline-date">{{ event.date }}</div>
            <div class="timeline-dot" />
            <div class="timeline-body">
              <div class="timeline-title">{{ event.title }}</div>
              <div v-if="event.description" class="timeline-description">
                {{ event.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
