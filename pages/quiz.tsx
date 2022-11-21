import React, { useEffect, useContext, useState, useCallback } from 'react'
import Answer from '../components/Answer/Answer'
import Layout from '../components/Layout/Layout'
import Logo from '../components/Logo/Logo'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Question from '../components/Question/Question'
import { QuizContext } from '../contexts/QuizContext'
import calcProgress from '../utils/calcProgress'

const Quiz = () => {
  const [loading, setLoading] = useState(true)
  const { quizData, getData, gameState, initGameState } =
    useContext(QuizContext)

  // Get Game Data from API
  useEffect(() => {
    const setup = async () => {
      getData()
    }
    setup()
  }, [])

  // Set Up game after Data has Been fetched
  useEffect(() => {
    initGameState()
    setLoading(false)
  }, [quizData])

  if (loading) {
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
          number={quizData.questions[0].q_number}
          question={quizData.questions[0].question}
        />
        {quizData.questions[0].answers.map((q) => {
          return <Answer text={q} key={q} />
        })}
        <ProgressBar
          progress={calcProgress(
            gameState.currentQuestion,
            gameState.totalQuestions
          )}
        />
      </main>
    </Layout>
  )
}

export default Quiz
