import React from 'react'
import styles from './Menu.module.scss'
import { useSession, signOut, signIn } from 'next-auth/react'
import Link from 'next/link'

const Menu = () => {
  const { data: session } = useSession()
  return (
    <div className={styles.menu}>
      {session && (
        <>
          <Link href={'/account'}>
            <li>Account</li>
          </Link>

          <li onClick={() => signOut()}>Sign Out</li>
        </>
      )}
      {!session && <li onClick={() => signIn()}>Sign In</li>}
      <Link href={'/about'}>
        <li>About</li>
      </Link>
    </div>
  )
}

export default Menu
