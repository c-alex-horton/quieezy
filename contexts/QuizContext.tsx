import { createContext, useState, FC, ReactNode } from 'react'
import promisedSetState from '../utils/promisedSetState'

type Questions = {
  q_number: number
  question: string
  answers: string[]
  correct_answer: string
}

interface IQuizContext {
  quizData: {
    questions: Questions[]
  }
  gameState: any
  getData: () => void
  initGameState: () => void
}

const defaultValue = {
  quizData: {
    questions: [
      {
        question: '',
        correct_answer: '',
        q_number: 0,
        answers: [''],
      },
    ],
  },
  gameState: {
    currentQuestion: 0,
    totalQuestions: 0,
    correctQuestions: 0,
  },
  getData: () => {
    return null
  },
  initGameState: () => {
    return null
  },
}

export const QuizContext = createContext<IQuizContext>(defaultValue)

type Props = {
  children: ReactNode
}

export const QuizProvider: FC<Props> = ({ children }) => {
  const [quizData, setQuizData] = useState({
    questions: [
      {
        question: '',
        correct_answer: '',
        q_number: 0,
        answers: [''],
      },
    ],
  })
  const [gameState, setGameState] = useState({
    currentQuestion: 1,
    totalQuestions: 0,
    correctQuestions: 0,
  })

  const initGameState = () => {
    setGameState({
      currentQuestion: 1,
      totalQuestions: quizData.questions.length,
      correctQuestions: 0,
    })
  }

  const processQuestions = (
    questions: [
      {
        category: string
        type: string
        difficulty: string
        question: string
        incorrect_answers: [string]
        correct_answer: string
      }
    ]
  ) => {
    const formatedQuestions: Questions[] = []
    questions.map((q, i) => {
      let answers: [string] = q.incorrect_answers
      answers.push(q.correct_answer)
      formatedQuestions.push({
        question: q.question,
        correct_answer: q.correct_answer,
        q_number: i + 1,
        answers: answers.sort(),
      })
    })
    return formatedQuestions
  }

  const getData = async () => {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&category=15&type=multiple'
    )
    const data = await res.json()

    setQuizData({ ...quizData, questions: processQuestions(data.results) })
  }

  return (
    <QuizContext.Provider
      value={{
        quizData,
        getData,
        gameState,
        initGameState,
      }}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizProvider
