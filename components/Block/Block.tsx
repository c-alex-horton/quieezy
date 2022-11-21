import React from 'react'
import styles from './Block.module.scss'

type Props = {
  children: React.ReactNode
}

const Block: React.FC<Props> = ({ children }) => {
  return <div className={styles.block}>{children}</div>
}

export default Block
