import React from 'react'
import Block from '../Block/Block'
import sanitizeHtml from 'sanitize-html'

type Props = {
  number: number
  question: string
}

const Question = ({ number, question }: Props) => {
  return (
    <Block>
      <h2>Question {number?.toString()}</h2>
      <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(question) }} />
    </Block>
  )
}

export default Question
