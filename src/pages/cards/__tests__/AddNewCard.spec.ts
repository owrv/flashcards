import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import AddNewCard from '@/pages/cards/AddNewCard.vue'
import { flashcardsStore } from '@/stores/cards'

describe('AddNewCard', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('requires question and answer before creating a card', async () => {
    const wrapper = mount(AddNewCard)
    await wrapper.get('form').trigger('submit')

    expect(wrapper.text()).toContain('Informe pergunta e resposta.')
    expect(flashcardsStore().listFlashcards).toHaveLength(0)
  })

  it('creates a flashcard in the store', async () => {
    const wrapper = mount(AddNewCard)

    await wrapper.get('input[placeholder="Digite a pergunta"]').setValue('O que e Vue?')
    await wrapper.get('input[placeholder="Digite a resposta"]').setValue('Um framework')
    await wrapper.get('form').trigger('submit')

    expect(flashcardsStore().listFlashcards).toMatchObject([
      {
        pergunta: 'O que e Vue?',
        resposta: 'Um framework',
      },
    ])
  })
})
