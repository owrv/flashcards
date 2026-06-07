<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <AppNavbar />

  <div class="app-content">
    <RouterView />
  </div>
</template>

<style scoped>
.app-content {
  width: 100%;
  padding: 2rem clamp(1rem, 4vw, 2rem);
}
</style>
