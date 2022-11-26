import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import Header from './Header'
import styles from './Layout.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme} ${styles.layout}`}>
      <Header />
      <main className='main'>{children}</main>
    </div>
  )
}

export default Layout
