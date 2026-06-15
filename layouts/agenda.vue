<script setup lang="ts">
defineProps<{
  heading?: string
  items?: Array<{ title: string; description?: string }>
}>()
</script>

<template>
  <div class="slidev-layout frame agenda">
    <div class="frame-content">
      <h1 v-if="heading" class="agenda-heading">{{ heading }}</h1>
      <slot />
      <ol v-if="items?.length" class="agenda-list">
        <li v-for="(item, i) in items" :key="i" class="agenda-item">
          <div class="agenda-item-body">
            <span class="agenda-item-title">{{ item.title }}</span>
            <span v-if="item.description" class="agenda-item-desc">{{ item.description }}</span>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
