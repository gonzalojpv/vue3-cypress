<script setup lang="ts">
import { computed, ref } from 'vue'
import presents from '@/utils/presents.json'
import { sort } from '@/utils/sort'
import type { Order } from '@/utils/sort'

const order = ref<Order>()

function handleChange() {
  if (!order.value || order.value === 'desc') {
    order.value = 'asc'
  } else {
    order.value = 'desc'
  }
}

const sorted = computed(() => {
  if (!order.value) {
    return presents
  }

  return sort(presents, order.value)
})
</script>

<template>
  <div class="flex h-full w-full items-center justify-center p-4">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex items-center justify-center">
        <img
          v-for="present in sorted"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
        />
      </div>
    </div>
    <button @click="handleChange">
      Sort by {{ order === 'asc' ? 'desc' : 'asc' }}
    </button>
  </div>
</template>
