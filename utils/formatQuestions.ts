import { shuffle } from './shuffle'
import { RawQuestion } from '../types/QuizContextTypes'

export const formatQuestions = (rawQuestions: RawQuestion[]): Questions[] => {
  console.log('formatter entry', rawQuestions)

  return rawQuestions.map((q, i) => {
    let allAnswers = q.incorrect_answers.map((a) => {
      return a
    })

    allAnswers.push(q.correct_answer)

    return {
      q_number: i + 1,
      question: q.question,
      answers: shuffle(allAnswers),
      correct_answer: q.correct_answer,
    }
  })
}
