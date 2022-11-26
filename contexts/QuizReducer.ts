import { QuizAction, QuizState } from '../types/QuizContextTypes'
import { formatQuestions } from '../utils/formatQuestions'

export const initialState: QuizState = {
  questions: [
    {
      question: '',
      correct_answer: '',
      q_number: 0,
      answers: [''],
    },
  ],
  gameState: {
    currentQuestion: 0,
    totalQuestions: 0,
    correctQuestions: 0,
    started: false,
    currentQuestionAnswered: false,
    feedback: '',
  },
  loading: true,
  questionsFetched: false,
  rawQuestions: null,
  syncScore: false,
}

export const quizReducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    // Add Fetch data and create formatted Questions
    case 'add-data': {
      const newQuestions = formatQuestions(action.payload)
      return {
        ...state,
        gameState: {
          ...state.gameState,
          totalQuestions: newQuestions.length,
          started: true,
        },
        loading: false,
        rawQuestions: action.payload,
        questions: newQuestions,
        questionsFetched: true,
      }
    }
    // update State for correct answer
    case 'correct-answer': {
      return {
        ...state,
        gameState: {
          ...state.gameState,
          currentQuestionAnswered: true,
          correctQuestions: state.gameState.correctQuestions + 1,
          feedback: 'Correct!',
          // Check if its the last questions, if yes, set game as over
          started:
            state.gameState.currentQuestion + 1 >=
            state.gameState.totalQuestions
              ? false
              : true,
        },
      }
    }
    // update state for incorrect answer
    case 'incorrect-answer': {
      return {
        ...state,
        gameState: {
          ...state.gameState,
          currentQuestionAnswered: true,
          feedback: 'Wrong!',
          // Check if its the last questions, if yes, set game as over
          started:
            state.gameState.currentQuestion + 1 >=
            state.gameState.totalQuestions
              ? false
              : true,
        },
      }
    }
    // reset question state, increment current question
    case 'next-question': {
      return {
        ...state,
        gameState: {
          ...state.gameState,
          currentQuestion: state.gameState.currentQuestion + 1,
          currentQuestionAnswered: false,
          feedback: '',
        },
      }
    }
    // reset quiz state
    case 'restart-quiz': {
      return { ...initialState }
    }
    case 'score-synced': {
      return { ...state, syncScore: true }
    }
    default: {
      return state
    }
  }
}
