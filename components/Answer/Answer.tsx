import React from 'react'
import Block from '../Block/Block'
import styles from './Answer.module.scss'

type Props = {
  text: string
  onClick?: () => void
}

const Answer = ({ text, onClick }: Props) => {
  return (
    <Block addClass={styles.answer} onClick={onClick}>
      {text}
    </Block>
  )
}

export default Answer
