<script setup lang="ts">
defineProps<{
  stats: { value: string; label: string; description?: string }[]
}>()
</script>

<template>
  <div class="slidev-layout frame stats-layout">
    <div class="frame-content stats-content">
      <slot />
      <div class="stats-cards">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div v-if="stat.description" class="stat-description">{{ stat.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
