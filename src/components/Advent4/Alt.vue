<script setup lang="ts">
withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>

<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1" />

    <div class="flex flex-row justify-center">
      <!-- Create the tree sections -->
      <div
        v-for="i in size"
        :key="i"
        class="relative -m-2 flex h-16 w-16 items-center justify-center rounded-full bg-green"
      />
    </div>
  </div>
</template>
