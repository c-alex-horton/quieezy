import React, { useContext, useState } from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.scss'
import { ThemeContext } from '../../contexts/ThemeContext'
import { BsSun, BsMoon, BsList } from 'react-icons/bs'
import Menu from './Menu'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <div className={styles.header}>
      <div className={styles.menuwrap}>
        <div className={styles.menu} onClick={() => setMenuToggle(!menuToggle)}>
          <BsList />
          {menuToggle && <Menu />}
        </div>
      </div>

      <Logo />
      <div className={styles.endcol}>
        <div onClick={toggleTheme} className={styles.toggle}>
          <BsSun />
          <div>|</div>
          <BsMoon />
        </div>
      </div>
    </div>
  )
}

export default Header
