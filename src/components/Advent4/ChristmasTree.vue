<script setup lang="tsx">
import { FunctionalComponent } from 'vue'

withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)

const Ball: FunctionalComponent = (props, context) => {
  console.log('props', props)
  console.log('context', context)
  return (
    <div class="relative -m-2 flex h-16 w-16 items-center justify-center rounded-full bg-green" />
  )
}
</script>

<template>
  <div>
    <div v-for="i in size" :key="i" class="flex justify-center">
      <Ball v-for="j in i" :key="j" />
    </div>
  </div>
</template>
