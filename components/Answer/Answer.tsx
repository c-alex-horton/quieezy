import React from 'react'
import Block from '../Block/Block'

type Props = {
  text: string
}

const Answer = ({ text }: Props) => {
  return <Block>{text}</Block>
}

export default Answer
