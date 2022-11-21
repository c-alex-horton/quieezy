import React, { useContext } from 'react'
import { QuizContext } from '../contexts/QuizContext'
import Layout from '../components/Layout/Layout'
import Block from '../components/Block/Block'
import Link from 'next/link'
import Button from '../components/Button/Button'

const Results = () => {
  const { gameState } = useContext(QuizContext)
  return (
    <Layout>
      <main className='main'>
        <Block>
          <h1>You finished!</h1>
          <h3>How&apos;d you do?</h3>
          <Link href='/quiz'>
            <h2>
              {Math.round(
                (gameState.correctQuestions / gameState.totalQuestions) * 100
              )}
              %
            </h2>
            <Button content='Go Again?' />
          </Link>
        </Block>
      </main>
    </Layout>
  )
}

export default Results
