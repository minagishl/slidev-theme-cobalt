<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    cards: Array<{ title: string; description?: string }>
    columns?: 2 | 3 | 4
  }>(),
  {
    columns: undefined,
  }
)

const gridClass = props.columns
  ? `cards-grid-${props.columns}`
  : `cards-grid-auto-${Math.min(Math.max(props.cards?.length ?? 0, 1), 6)}`
</script>

<template>
  <div class="slidev-layout frame cards-layout">
    <div class="frame-content cards-content">
      <slot />
      <div class="cards-grid" :class="gridClass">
        <div v-for="(card, i) in cards" :key="i" class="card-item">
          <div class="card-title">{{ card.title }}</div>
          <div v-if="card.description" class="card-description">
            {{ card.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
