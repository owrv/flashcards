<script setup lang="ts">
import AddNewCard from '@/pages/cards/AddNewCard.vue'
import CardList from '@/pages/cards/CardList.vue'

defineOptions({
  name: 'TheWelcome',
})
</script>

<template>
  <section class="flashcards">
    <div class="flashcards-form-panel">
      <div class="flashcards-form-content">
        <header>
          <h2>Flashcards</h2>
          <p>Cadastre perguntas e respostas para iniciar sua revisao.</p>
        </header>

        <AddNewCard />
      </div>
    </div>

    <div class="flashcards-list-panel">
      <CardList />
    </div>
  </section>
</template>

<style scoped>
.flashcards {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 2rem;
  min-height: calc(100vh - 8rem);
  width: 100%;
}

.flashcards-form-panel {
  display: grid;
  place-items: center;
}

.flashcards-form-content {
  width: min(420px, 100%);
}

.flashcards-list-panel {
  align-self: start;
  min-width: 0;
}

header {
  display: grid;
  gap: 0.35rem;
}

h2,
p {
  margin: 0;
}

@media (max-width: 768px) {
  .flashcards {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .flashcards-form-panel {
    place-items: start stretch;
  }

  .flashcards-form-content {
    width: 100%;
  }
}
</style>
