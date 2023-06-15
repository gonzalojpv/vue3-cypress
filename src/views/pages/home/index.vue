<script setup lang="ts">

</script>

<template>
  <div class="">
      <ul role="list" class="divide-y divide-gray-100">
    <li class="flex items-center justify-between gap-x-6 py-5">
      <div class="min-w-0">
        <div class="flex items-start gap-x-3">
          <p class="text-sm font-semibold leading-6 text-gray-900">Fetching and Debounce in Vue (Advent of Vue #1)</p>
          <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Completed</p>
        </div>
        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p class="truncate">Created by Gonzalo</p>
        </div>
      </div>
      <div class="flex flex-none items-center gap-x-4">
        <router-link :to="{ name: 'advent.one' }" class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
          View project<span class="sr-only">, Advent of Vue #1</span>
        </router-link>
      </div>
    </li>
    <li class="flex items-center justify-between gap-x-6 py-5">
      <div class="min-w-0">
        <div class="flex items-start gap-x-3">
          <p class="text-sm font-semibold leading-6 text-gray-900">Simple Functions and Conditionals (Advent of Vue #2)</p>
          <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-gray-600 bg-gray-50 ring-gray-500/10">In progress</p>
        </div>
        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p class="truncate">Created by Gonzalo</p>
        </div>
      </div>
      <div class="flex flex-none items-center gap-x-4">
        <router-link :to="{ name: 'advent.two' }" class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
          View project<span class="sr-only">, Advent of Vue #2</span>
        </router-link>
      </div>
    </li>
</ul>
  </div>
</template>
