import React, { useEffect, useContext, useState } from 'react'
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

  const [quizFetched, setQuizFetched] = useState(false)

  // Get Game Data from API
  useEffect(() => {
    if (!quizFetched) {
      getData()
      setQuizFetched(true)
    }
    console.log('Use Effect 1 ran')
  }, [quizFetched, getData, initGameState])

  // initGame after data is fetched
  useEffect(() => {
    if (quizData.questions[0].question !== '') {
      initGameState()
    }
    if (gameState.started && loading) {
      setLoading(false)
    }
    console.log('Use Effect 2 ran')
  }, [quizData.questions, gameState.started, initGameState, loading])

  const handleAnswer = (q: string) => {
    if (
      q === quizData.questions[gameState.currentQuestion - 1].correct_answer
    ) {
    }
  }

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
          number={quizData.questions[gameState.currentQuestion - 1].q_number}
          question={quizData.questions[0].question}
        />
        {quizData.questions[0].answers.map((q) => {
          return <Answer text={q} key={q} onClick={() => handleAnswer(q)} />
        })}
        <ProgressBar
          progress={calcProgress(
            gameState.currentQuestion - 1,
            gameState.totalQuestions
          )}
        />
      </main>
    </Layout>
  )
}

export default Quiz
