<script setup lang="ts">
import { useItemComparison } from '@/composables/itemComparison'
import ItemSelect from '@/components/Advent6/ItemSelect.vue'

const { itemA, itemB, items, message } = useItemComparison()
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center gap-5">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col justify-center gap-5">
      <ItemSelect v-model="itemA" :items="items" data-cy="select-1" />
      <ItemSelect v-model="itemB" :items="items" data-cy="select-2" />
    </div>
    <div data-cy="message">
      {{ message }}
    </div>
  </div>
</template>
