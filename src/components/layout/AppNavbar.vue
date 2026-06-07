<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { navigationItems } from './navigation'

defineOptions({
  name: 'AppNavbar',
})
</script>

<template>
  <header class="app-navbar">
    <RouterLink class="brand" :to="{ name: 'home' }" aria-label="Ir para o início">
      Flashcards
    </RouterLink>

    <nav class="nav-links" aria-label="Navegação principal">
      <RouterLink
        v-for="item in navigationItems"
        :key="item.routeName"
        class="nav-link"
        :to="{ name: item.routeName }"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  min-height: 4rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-background-soft);
  padding: 0.85rem clamp(1rem, 4vw, 2rem);
}

.brand {
  color: var(--color-heading);
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.nav-link {
  border-radius: 6px;
  color: var(--color-text);
  font-weight: 600;
  line-height: 1;
  padding: 0.65rem 0.85rem;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  background: var(--color-background-mute);
  color: var(--color-heading);
}

@media (max-width: 480px) {
  .app-navbar {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
