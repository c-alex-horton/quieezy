import React from 'react'
import Layout from '../components/Layout/Layout'
import Logo from '../components/Logo/Logo'
import Block from '../components/Block/Block'
import Button from '../components/Button/Button'
import { useRouter } from 'next/router'

const About = () => {
  const router = useRouter()
  return (
    <Layout>
      <main className='main'>
        <Logo />
        <Block>
          <h1>About</h1>
          <p>This App was created by Caleb Horton.</p>
          <p>React, NextJS, TypeScript, useReducer, useContext, SCSS</p>
          <Button content='Back' func={() => router.back()}></Button>
        </Block>
      </main>
    </Layout>
  )
}

export default About
