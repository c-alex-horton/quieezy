import React from 'react'
import Block from '../Block/Block'
import styles from './Answer.module.scss'
import sanitizeHtml from 'sanitize-html'

type Props = {
  text: string
  onClick?: () => void
  mod?: string
}

const Answer = ({ text, onClick, mod }: Props) => {
  const modifier = () => {
    if (mod === 'correct') {
      return styles.correct
    } else if (mod == 'wrong') {
      return styles.wrong
    } else {
      return ''
    }
  }

  return (
    <Block addClass={`${styles.answer} ${modifier()}`} onClick={onClick}>
      <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(text) }} />
    </Block>
  )
}

export default Answer
