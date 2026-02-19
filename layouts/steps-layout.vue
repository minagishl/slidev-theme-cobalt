<script setup lang="ts">
defineProps<{
  steps: Array<{ title: string; body: string }>
}>()
</script>

<template>
  <div class="slidev-layout frame steps-layout">
    <div class="frame-content steps-content">
      <div class="steps-column">
        <div v-for="(step, i) in steps" :key="i" class="step">
          <div class="step-header">
            <span class="step-number">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="step-title">{{ step.title }}</span>
          </div>
          <div class="step-body">{{ step.body }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
