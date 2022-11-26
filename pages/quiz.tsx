import React, { useMemo } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Answer from '../components/Answer/Answer'
import Button from '../components/Button/Button'
import Layout from '../components/Layout/Layout'
import Logo from '../components/Logo/Logo'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Question from '../components/Question/Question'
import { useQuiz } from '../contexts/QuizContext'
import calcProgress from '../utils/calcProgress'
import { fetchQuizData } from '../utils/fetchQuizData'
import confetti from 'canvas-confetti'

const Quiz = () => {
  const router = useRouter()
  const { state, dispatch } = useQuiz()

  // get array item of current question
  const currentQuestion = useMemo(() => {
    return state.questions[state.gameState.currentQuestion]
  }, [state.questions, state.gameState.currentQuestion])

  const url = 'https://opentdb.com/api.php?amount=10&category=15&type=multiple'

  // Get questions from API if not already fetched for current quiz
  useSWR(!state.questionsFetched ? url : null, fetchQuizData, {
    onSuccess: (d) => {
      console.log(d)
      dispatch({ type: 'add-data', payload: d })
    },
  })

  // determine if answer was correct, dispatch corresponding action
  const handleAnswer = (q: string) => {
    if (!state.gameState.currentQuestionAnswered) {
      if (q === currentQuestion.correct_answer) {
        dispatch({ type: 'correct-answer' })
        confetti()
      } else {
        dispatch({ type: 'incorrect-answer' })
      }
    }
  }

  // call next action. If game is over, route to results page
  const handleNextQuestion = () => {
    if (!state.gameState.started) {
      router.push('/results')
    } else {
      dispatch({ type: 'next-question' })
    }
  }

  // determine if each answer option is correct or incorrect
  const handleCorrectness = (q: string) => {
    if (state.gameState.currentQuestionAnswered) {
      return q === currentQuestion.correct_answer
    } else {
      return null
    }
  }

  if (state.loading) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <Logo />
      <Question
        number={currentQuestion.q_number}
        question={currentQuestion.question}
      />
      {currentQuestion.answers.map((q) => {
        return (
          <Answer
            text={q}
            key={q}
            onClick={() => handleAnswer(q)}
            mod={handleCorrectness(q)}
          />
        )
      })}
      {/* Added after the question is answered */}
      <h1>{state.gameState.feedback}</h1>
      {state.gameState.currentQuestionAnswered && (
        <Button
          content='Next'
          func={() => {
            handleNextQuestion()
          }}
        />
      )}
      {/* Shows progress bar of how far into quiz */}
      <ProgressBar
        progress={calcProgress(
          state.gameState.currentQuestion,
          state.gameState.totalQuestions
        )}
      />
    </Layout>
  )
}

export default Quiz
