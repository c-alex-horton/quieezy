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
import confetti from 'canvas-confetti'

const Quiz = () => {
  const router = useRouter()
  const { state, dispatch } = useQuiz()

  // Ref for fetchQuizData so api call only runs once
  const dataFetchRef = useRef(false)

  // get array item of current question
  const currentQuestion = useMemo(() => {
    return state.questions[state.gameState.currentQuestion]
  }, [state.questions, state.gameState])

  // Get async Data & prevent double api call with ref
  useEffect(() => {
    // asnyc wrapper function
    const asyncFetch = async () => {
      if (!state.gameState.started) {
        const data = await fetchQuizData()
        dispatch({ type: 'add-data', payload: data })
      }
    }
    //Check if reference is current to prevent double api call
    if (dataFetchRef.current) return
    dataFetchRef.current = true
    asyncFetch()
  }, [dispatch, state.gameState.started])

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
      </main>
    </Layout>
  )
}

export default Quiz
