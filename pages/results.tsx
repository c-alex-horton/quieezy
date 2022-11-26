import React from 'react'
import { useQuiz } from '../contexts/QuizContext'
import Layout from '../components/Layout/Layout'
import Block from '../components/Block/Block'
import Button from '../components/Button/Button'
import { useRouter } from 'next/router'
import { calcScore } from '../utils/calcScore'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const Results = () => {
  const { state, dispatch } = useQuiz()
  const router = useRouter()
  const session = useSession()

  useSWR(
    !state.syncScore && session ? '/api/update-stats' : null,
    async (url) => {
      const data = {
        correct: state.gameState.correctQuestions,
        questions: state.gameState.totalQuestions,
      }
      await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      dispatch({ type: 'score-synced' })
    }
  )

  // Reset state in reducer and route to quiz page
  const handleRestart = () => {
    dispatch({ type: 'restart-quiz' })
    router.push('/quiz')
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
        <Block>
          <h1>You finished!</h1>
          <h3>How&apos;d you do?</h3>

          <h2>
            {calcScore(
              state.gameState.correctQuestions,
              state.gameState.totalQuestions
            )}
          </h2>
          <Button content='Go Again?' func={() => handleRestart()} />
        </Block>
      </main>
    </Layout>
  )
}

export default Results
