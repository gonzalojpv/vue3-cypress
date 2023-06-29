<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

const christmasDate = new Date('2023/12/25')

const count = Math.ceil((+christmasDate - +new Date()) / (1000 * 60 * 60 * 24))

const locales = [
  { key: 'en', flag: '🇺🇸' },
  { key: 'ja-JP', flag: '🇯🇵' },
  { key: 'de', flag: '🇩🇪' },
  { key: 'es', flag: '🇲🇽' },
]

const { t, locale, d } = useI18n()

function useCycle<T>(list: T[]) {
  const i = ref(0)

  function next() {
    if (i.value >= list.length - 1) {
      i.value = 0
    } else {
      i.value++
    }
  }

  const current = computed(() => list[i.value])

  return {
    next,
    current,
  }
}

const { current, next } = useCycle(locales)

watchEffect(() => {
  locale.value = current.value.key
})
</script>

<template>
  <main class="max-w-600px mx-auto flex h-full flex-col justify-center">
    <section class="flex flex-col items-center text-center leading-loose">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        {{ t('happyHolidays') }}
        <span class="i-twemoji-world-map"></span>
        <div>{{ current.flag }}</div>
        <button @click="next">Next</button>
        <div>
          {{
            t('christmasIsComing', {
              date: d(christmasDate, 'long'),
              time: t('day', count),
            })
          }}
        </div>
      </div>
    </section>
  </main>
</template>
