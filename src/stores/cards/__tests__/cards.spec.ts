import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { flashcardsStore } from '@/stores/cards'

describe('flashcardsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('creates, updates, removes, and clears flashcards', () => {
    const store = flashcardsStore()

    store.addCard('Pergunta', 'Resposta')
    expect(store.listFlashcards).toHaveLength(1)

    const [card] = store.listFlashcards
    store.updateCard({ ...card, resposta: 'Resposta atualizada' })
    expect(store.listFlashcards[0].resposta).toBe('Resposta atualizada')

    store.removeCard(card.id)
    expect(store.listFlashcards).toHaveLength(0)

    store.addCard('Outra pergunta', 'Outra resposta')
    store.clearCards()
    expect(store.listFlashcards).toHaveLength(0)
  })
})
