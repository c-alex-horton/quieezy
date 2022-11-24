// TODO: Refactor to Zustand
import {
  QuizAction,
  QuizState,
  QuizDispatch,
  QuizProviderProps,
} from '../types/QuizContextTypes'
import { createContext, useContext, useReducer } from 'react'
import { initialState } from './QuizReducer'
import { quizReducer } from './QuizReducer'

// Types

const QuizContext = createContext<
  { state: QuizState; dispatch: QuizDispatch } | undefined
>(undefined)

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  const value = { state, dispatch }
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

const useQuiz = () => {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error('useQuiz needs to be run within QuizProvider.')
  }
  return context
}

export { QuizProvider, useQuiz }
