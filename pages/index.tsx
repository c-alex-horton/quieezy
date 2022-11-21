import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import Logo from '../components/Logo/Logo'

export default function Home() {
  return (
    <Layout>
      <div className={'container'}>
        <Head>
          <title>Quieezy</title>
          <meta name='description' content="It's Quiz Time!" />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={'main'}>
          <Logo />
          <Link href={'/quiz'}>
            <Button content='Start Quiz' />
          </Link>
        </main>
      </div>
    </Layout>
  )
}
