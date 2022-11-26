import Head from 'next/head'
import { useSession, signIn } from 'next-auth/react'
import Button from '../components/Button/Button'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const { data: session } = useSession()
  const [redirectStarted, setRedirectStarted] = useState(false)
  const router = useRouter()

  if (session) {
    if (!redirectStarted) {
      router.push('/quiz')
      setRedirectStarted(true)
    }

    return (
      <Layout>
        <h1>Redirecting...</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Quieezy</title>
        <meta name='description' content="It's Quiz Time!" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Button content='Sign In' func={() => signIn()} />
      <Link href={'/quiz'}>
        <Button content='Continue as Guest' />
      </Link>
    </Layout>
  )
}
