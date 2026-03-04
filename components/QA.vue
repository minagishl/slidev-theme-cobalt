<script setup lang="ts">
defineProps<{
  question: string
}>()
</script>

<template>
  <div class="qa-item">
    <div class="qa-row qa-question">
      <div class="qa-badge">Q</div>
      <p class="qa-text">{{ question }}</p>
    </div>
    <div class="qa-row qa-answer">
      <div class="qa-badge">A</div>
      <div class="qa-text"><slot /></div>
    </div>
  </div>
</template>
