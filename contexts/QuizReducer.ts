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
  rawQuestions: null,
}

export const quizReducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case 'add-data': {
      const newQuestions = formatQuestions(action.payload)
      return {
        gameState: {
          ...state.gameState,
          totalQuestions: newQuestions.length,
          started: true,
        },
        loading: false,
        rawQuestions: action.payload,
        questions: newQuestions,
      }
    }
    case 'populate-questions': {
      return {
        gameState: state.gameState,
        loading: false,
        rawQuestions: state.rawQuestions,
        questions: action.payload,
      }
    }
    case 'correct-answer': {
      return {
        ...state,
        gameState: {
          ...state.gameState,
          currentQuestionAnswered: true,
          correctQuestions: state.gameState.correctQuestions + 1,
          feedback: 'Correct!',
          started:
            state.gameState.currentQuestion + 1 >=
            state.gameState.totalQuestions
              ? false
              : true,
        },
      }
    }
    case 'incorrect-answer': {
      return {
        ...state,
        gameState: {
          ...state.gameState,
          currentQuestionAnswered: true,
          feedback: 'Wrong!',
          started:
            state.gameState.currentQuestion + 1 >=
            state.gameState.totalQuestions
              ? false
              : true,
        },
      }
    }
    case 'next-question': {
      if (
        state.gameState.currentQuestion + 1 >=
        state.gameState.totalQuestions
      ) {
        return { ...state, gameState: { ...state.gameState, started: false } }
      }
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
    case 'restart-quiz': {
      return { ...initialState }
    }
    default: {
      return state
    }
  }
}
