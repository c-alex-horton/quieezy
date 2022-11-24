import React from 'react'
import Block from '../Block/Block'
import styles from './Answer.module.scss'
import sanitizeHtml from 'sanitize-html'

type Props = {
  text: string
  onClick?: () => void
  mod?: boolean | null
}

const Answer = ({ text, onClick, mod }: Props) => {
  const modifier = () => {
    if (mod) {
      return styles.correct
    } else if (mod === false) {
      return styles.wrong
    } else if (mod === null) {
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
