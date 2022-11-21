import { createContext, useState, FC, ReactNode, useCallback } from 'react'

interface IQuizContext {
  quizData: {
    questions: Questions[]
  }
  gameState: GameState
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
    started: false,
  },
  getData: async () => {
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

  const [gameInited, setGameInited] = useState(false)
  const [gameState, setGameState] = useState({
    currentQuestion: 0,
    totalQuestions: 0,
    correctQuestions: 0,
    started: false,
  })

  const initGameState = useCallback(() => {
    setGameState({
      currentQuestion: 1,
      totalQuestions: quizData.questions.length,
      correctQuestions: 0,
      started: true,
    })
  }, [quizData.questions])

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

  // const initGame = async () => {}
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
