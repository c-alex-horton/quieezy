import React from 'react'
import styles from './ProgressBar.module.scss'

type Props = {
  progress: number
}

const ProgressBar = ({ progress }: Props) => {
  const widthStyle = { width: `${progress}%` }
  return (
    <div className={styles['progress-bar']}>
      <div style={widthStyle} />
    </div>
  )
}

export default ProgressBar
