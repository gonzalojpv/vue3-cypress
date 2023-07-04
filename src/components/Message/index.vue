<script setup lang="ts">
type Variant = 'success' | 'warning' | 'error'

defineProps<{
  variant: Variant
}>()
</script>

<template>
  <div :class="variant">Message! {{ variant }}?</div>
</template>
