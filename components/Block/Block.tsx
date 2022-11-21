import React from 'react'
import styles from './Block.module.scss'

type Props = {
  children: React.ReactNode
  addClass?: string
  onClick?: () => void
}

const Block: React.FC<Props> = ({ children, addClass, onClick }) => {
  return (
    <div className={`${styles.block} ${addClass}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Block
