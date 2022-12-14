import React from 'react'
import Layout from '../components/Layout/Layout'
import { PrismaClient, User } from '@prisma/client'
import { getSession } from 'next-auth/react'
import Block from '../components/Block/Block'
import { calcScore } from '../utils/calcScore'

type Props = {
  user: User
}

const Account = ({ user }: Props) => {
  const session = getSession()

  if (!session) {
    return (
      <Layout>
        <h1>You are not Logged In</h1>
      </Layout>
    )
  }
  return (
    <Layout>
      <Block>
        <h1>Account</h1>
        <h2>{user.name}</h2>
        <h3>Quizes Taken: {user.totalQuizes}</h3>
        <h3>Accuracy: {calcScore(user.totalCorrect, user.totalQuestions)}</h3>
      </Block>
    </Layout>
  )
}

export default Account

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        permenant: false,
        destination: '/',
      },
    }
  }
  if (session) {
    const prisma = new PrismaClient()
    const user = await prisma.user.findUnique({
      where: {
        id: session?.user?.id,
      },
    })

    return {
      props: { user },
    }
  }
}
