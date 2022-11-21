export {};

declare global {
    type Questions = {
        q_number: number
        question: string
        answers: string[]
        correct_answer: string
      }
      type GameState = {
        currentQuestion: number
        totalQuestions: number
        correctQuestions: number
        started: boolean
        currentQuestionAnswered: boolean
      }
}