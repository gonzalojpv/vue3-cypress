<script setup lang="ts">
import NotificationToast from '@/components/NotificationToast/index.vue'
import Advent1 from '@/components/Advent1/index.vue'
import { ref } from 'vue'

const message = ref('Image uploaded successfully')

const clearNotification = () => {
  message.value = ''
}
</script>
<template>
  <NotificationToast
    status="success"
    :message="message"
    @clear-notification="clearNotification"
  />
  <Advent1 />
</template>
