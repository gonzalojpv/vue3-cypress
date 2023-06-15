<script setup lang="ts">
import { log } from '@/utils/generics'

log<string, number>('data', 42)
log<string, string>('data', 'happy day')
</script>
<template>TypeScript - Generic</template>
