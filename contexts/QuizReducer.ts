import { QuizAction, QuizState } from '../types/QuizContextTypes'

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
      return {
        gameState: state.gameState,
        loading: true,
        rawQuestions: action.payload,
        questions: state.questions,
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
    default: {
      return state
    }
  }
}
