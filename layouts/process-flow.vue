<script setup lang="ts">
defineProps<{
  steps: Array<{ title: string; description: string }>
}>()
</script>

<template>
  <div class="slidev-layout frame process-flow">
    <div class="frame-content process-flow-content">
      <slot />
      <div class="process-flow-container">
        <template v-for="(step, i) in steps" :key="i">
          <div class="process-step">
            <div class="process-step-circle">
              <div class="process-step-title">{{ step.title }}</div>
            </div>
            <div class="process-step-description">{{ step.description }}</div>
          </div>
          <div v-if="i < steps.length - 1" class="process-arrow"></div>
        </template>
      </div>
    </div>
  </div>
</template>
