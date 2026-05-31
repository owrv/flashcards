import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import type { Flashcard } from '@/types/flashcards.type'

interface State {
  cards: Flashcard[]
}

export const flashcardsStore = defineStore('flashcardsStore', {
  state: (): State => ({
    cards: [],
  }),
  actions: {
    addCard(pergunta: string, resposta: string) {
      const newCard: Flashcard = {
        id: uuidv4(),
        pergunta,
        resposta,
      }
      this.cards.push(newCard)
    },
    clearCards() {
      this.cards = []
    },
    removeCard(cardId: string) {
      this.cards = this.cards.filter((card) => card.id !== cardId)
    },
    updateCard(updatedCard: Flashcard) {
      const index = this.cards.findIndex((card) => card.id === updatedCard.id)
      if (index !== -1) {
        this.cards.splice(index, 1, updatedCard)
      }
    },
  },
  getters: {
    listFlashcards(): Flashcard[] {
      return this.cards
    },
  },
})
