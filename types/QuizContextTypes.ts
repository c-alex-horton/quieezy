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
  | { type: 'add-data'; payload?: any }
  | { type: 'populate-questions'; payload?: any }
  | { type: 'correct-answer'; payload?: any }
  | { type: 'incorrect-answer'; payload?: any }
  | { type: 'next-question'; payload?: any }
  | { type: 'restart-quiz'; payload?: any }
  | { type: 'score-synced'; payload?: any }

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
