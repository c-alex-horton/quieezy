import React from 'react'
import Block from '../Block/Block'

type Props = {
  number: number
  question: string
}

const Question = ({ number, question }: Props) => {
  return (
    <Block>
      <h2>Question {number?.toString()}</h2>
      <p>{question}</p>
    </Block>
  )
}

export default Question
