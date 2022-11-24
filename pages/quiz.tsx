import React, { useEffect, useRef } from 'react'
import Answer from '../components/Answer/Answer'
import Button from '../components/Button/Button'
import Layout from '../components/Layout/Layout'
import Logo from '../components/Logo/Logo'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Question from '../components/Question/Question'
import { useQuiz } from '../contexts/QuizContext'
import calcProgress from '../utils/calcProgress'
import { fetchQuizData } from '../utils/fetchQuizData'
import { formatQuestions } from '../utils/formatQuestions'

const Quiz = () => {
  const { state, dispatch } = useQuiz()
  const dataFetchRef = useRef(false)

  const handleAnswer = (q: string) => {}

  useEffect(() => {
    const asyncFetch = async () => {
      const data = await fetchQuizData()
      dispatch({ type: 'add-data', payload: data })
    }
    if (dataFetchRef.current) return
    dataFetchRef.current = true
    asyncFetch()
  }, [])

  useEffect(() => {
    if (state.rawQuestions) {
      const data = formatQuestions(state.rawQuestions)
      dispatch({ type: 'populate-questions', payload: data })
    }
  }, [state.rawQuestions, dispatch])

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
          number={state.questions[state.gameState.currentQuestion].q_number}
          question={state.questions[state.gameState.currentQuestion].question}
        />
        {state.questions[state.gameState.currentQuestion].answers.map((q) => {
          return (
            <Answer
              text={q}
              key={q}
              onClick={() => handleAnswer(q)}
              // mod={}
            />
          )
        })}
        <h1>{state.gameState.feedback}</h1>
        {state.gameState.currentQuestionAnswered && (
          <Button content='Next' func={() => {}} />
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
