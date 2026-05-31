<script setup lang="ts">
import AddNewCard from '@/pages/cards/AddNewCard.vue'
import CardList from '@/pages/cards/CardList.vue'

defineOptions({
  name: 'TheWelcome',
})
</script>

<template>
  <section class="flashcards">
    <header>
      <h2>Flashcards</h2>
      <p>Cadastre perguntas e respostas para iniciar sua revisao.</p>
    </header>

    <AddNewCard />
    <CardList />
  </section>
</template>

<style scoped>
.flashcards {
  width: min(720px, 100%);
}

header {
  display: grid;
  gap: 0.35rem;
}

h2,
p {
  margin: 0;
}
</style>
