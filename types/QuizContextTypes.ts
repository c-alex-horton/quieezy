import React from 'react'

export type RawQuestion = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
export type QuizAction =
  | { type: 'next'; payload?: any }
  | { type: 'add-data'; payload?: any }
  | { type: 'populate-questions'; payload?: any }
export type QuizState = {
  questions: Questions[]
  gameState: GameState
  loading: boolean
  rawQuestions: RawQuestion[] | null
}
export type QuizDispatch = (action: QuizAction) => void
export type QuizProviderProps = { children: React.ReactNode }
