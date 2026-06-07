<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { flashcardsStore } from '@/stores/cards'
import type { Flashcard } from '@/types/flashcards.type'

defineOptions({
  name: 'CardList',
})

const store = flashcardsStore()
const { listFlashcards } = storeToRefs(store)
const selected = ref<Flashcard | null>(null)

function responder(cardId: string) {
  selected.value = listFlashcards.value.find((card) => card.id === cardId) ?? null
}
</script>

<template>
  <section class="card-list">
    <p v-if="listFlashcards.length === 0" class="empty-state">Nenhum flashcard cadastrado.</p>

    <table v-else class="card-table">
      <thead>
        <tr>
          <th>Pergunta</th>
          <th>Resposta</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="card in listFlashcards" :key="card.id">
          <td>{{ card.pergunta }}</td>
          <td>{{ card.resposta }}</td>
          <td>
            <button :id="`responder-${card.id}`" type="button" @click="responder(card.id)">
              Responder
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="selected" class="selected-card">
      Flashcard selecionado: {{ selected.pergunta }}
    </p>
  </section>
</template>

<style scoped>
.card-list {
  display: grid;
  gap: 0.75rem;
}

.empty-state,
.selected-card {
  margin: 0;
}

.card-table {
  width: 100%;
  border-collapse: collapse;
}

.card-table th,
.card-table td {
  border: 1px solid var(--color-border);
  padding: 0.65rem;
  text-align: left;
}

.card-table button {
  border: 0;
  border-radius: 6px;
  background: #2563eb;
  color: #fff;
  padding: 0.45rem 0.7rem;
  cursor: pointer;
}
</style>
