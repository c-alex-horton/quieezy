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
  | { type: 'add-data'; payload: any }
  | { type: 'correct-answer' }
  | { type: 'incorrect-answer' }
  | { type: 'next-question' }
  | { type: 'restart-quiz' }
  | { type: 'score-synced' }

export type QuizState = {
  questions: Questions[]
  gameState: GameState
  loading: boolean
  rawQuestions: RawQuestion[] | null
  questionsFetched: boolean
  syncScore: boolean
}
export type QuizDispatch = (action: QuizAction) => void
export type QuizProviderProps = { children: React.ReactNode }
