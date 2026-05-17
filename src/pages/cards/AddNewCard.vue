<script setup lang="ts">
import { ref } from 'vue'
import { flashcardsStore } from '@/stores/cards'

defineOptions({
  name: 'AddNewCard',
})

const store = flashcardsStore()
const pergunta = ref('')
const resposta = ref('')
const error = ref(false)

function addCard() {
  const perguntaValue = pergunta.value.trim()
  const respostaValue = resposta.value.trim()

  if (!perguntaValue || !respostaValue) {
    error.value = true
    return
  }

  store.addCard(perguntaValue, respostaValue)
  pergunta.value = ''
  resposta.value = ''
  error.value = false
}
</script>

<template>
  <form class="add-card" @submit.prevent="addCard">
    <label class="field">
      <span>Pergunta</span>
      <input
        v-model="pergunta"
        class="input"
        :class="{ '-error': error }"
        type="text"
        placeholder="Digite a pergunta"
      />
    </label>

    <label class="field">
      <span>Resposta</span>
      <input
        v-model="resposta"
        class="input"
        :class="{ '-error': error }"
        type="text"
        placeholder="Digite a resposta"
      />
    </label>

    <p v-if="error" class="error-message">Informe pergunta e resposta.</p>

    <button class="add-card-button" type="submit">Adicionar flashcard</button>
  </form>
</template>

<style scoped>
.add-card {
  display: grid;
  gap: 0.75rem;
  margin-top: 1rem;
}

.field {
  display: grid;
  gap: 0.35rem;
}

.input {
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 0.65rem 0.75rem;
}

.input.-error {
  border-color: #c73b3b;
}

.error-message {
  color: #c73b3b;
  margin: 0;
}

.add-card-button {
  justify-self: start;
  border: 0;
  border-radius: 6px;
  background: #2f855a;
  color: #fff;
  padding: 0.65rem 0.9rem;
  cursor: pointer;
}
</style>
