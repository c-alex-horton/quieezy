import React from 'react'
import styles from './Button.module.scss'
// import IconType from '@types/react-icons/'

type Props = {
  content?: string
  func?: () => void
  children?: React.ReactNode
}

const Button = ({ content, children, func }: Props) => {
  return (
    <button className={styles.button} onClick={func}>
      {content}
      {children}
    </button>
  )
}

export default Button
