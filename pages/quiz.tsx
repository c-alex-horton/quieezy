import React, { useEffect, useRef, useMemo } from 'react'
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

const Quiz = () => {
  const { state, dispatch } = useQuiz()
  const dataFetchRef = useRef(false)

  const router = useRouter()

  const currentQuestion = useMemo(() => {
    return state.questions[state.gameState.currentQuestion]
  }, [state.questions, state.gameState])

  const handleAnswer = (q: string) => {
    if (!state.gameState.currentQuestionAnswered) {
      if (q === currentQuestion.correct_answer) {
        dispatch({ type: 'correct-answer' })
      } else {
        dispatch({ type: 'incorrect-answer' })
      }
    }
  }

  const handleNextQuestion = () => {
    if (!state.gameState.started) {
      router.push('/results')
    } else {
      dispatch({ type: 'next-question' })
    }
  }

  const handleCorrectness = (q: string) => {
    if (state.gameState.currentQuestionAnswered) {
      return q === currentQuestion.correct_answer
    } else {
      return null
    }
  }

  // Get async Data & prevent double api call with ref
  useEffect(() => {
    const asyncFetch = async () => {
      const data = await fetchQuizData()
      dispatch({ type: 'add-data', payload: data })
    }
    if (dataFetchRef.current) return
    dataFetchRef.current = true
    asyncFetch()
  }, [dispatch])

  if (state.loading) {
    return (
      <Layout>
        <main className='main'>
          <h1>Loading...</h1>
        </main>
      </Layout>
    )
  }

  return (
    <Layout>
      <main className='main'>
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
        <h1>{state.gameState.feedback}</h1>
        {state.gameState.currentQuestionAnswered && (
          <Button
            content='Next'
            func={() => {
              handleNextQuestion()
            }}
          />
        )}
        <ProgressBar
          progress={calcProgress(
            state.gameState.currentQuestion,
            state.gameState.totalQuestions
          )}
        />
      </main>
    </Layout>
  )
}

export default Quiz
