<script setup lang="ts">
import { onMounted } from 'vue'
import { log, fetchData, Developer } from '@/utils/generics'

type Joke = {
  setup: string
  delivery: string
}

type Computer = {
  turnOn: () => void
  turnOff: () => void
}

log<string, number>('data', 42)
log<string, string>('data', 'happy day')
log(1, 2)
log('Regards', 'Hi world')
// Generic class
const developer = new Developer<Computer>({
  turnOn: () => {
    console.log('turnOn')
  },
  turnOff: () => {
    console.log('turnOff')
  },
})

console.log('Generic Class', developer.computer)
onMounted(async () => {
  const joke = await fetchData<Joke>('https://v2.jokeapi.dev/joke/christmas')

  console.log('joke', joke.delivery)
})
</script>
<template>TypeScript - Generic</template>
