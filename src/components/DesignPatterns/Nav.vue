<script setup lang="ts">
defineProps<{ authenticated: boolean }>()
</script>

<template>
  <button>
    {{ `${authenticated ? 'Logout' : 'Login'}` }}
  </button>
</template>
