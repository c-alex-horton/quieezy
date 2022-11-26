import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import Button from '../Button/Button'
import { BsSun, BsMoon } from 'react-icons/bs'
import styles from './Layout.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`${theme} ${styles.layout}`}>
      <div onClick={toggleTheme} className={styles.toggle}>
        <BsSun />
        <div>|</div>
        <BsMoon />
      </div>
      <main className='main'>{children}</main>
    </div>
  )
}

export default Layout
