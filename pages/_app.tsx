import 'normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../contexts/ThemeContext'
import { QuizProvider } from '../contexts/QuizContext'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <QuizProvider>
          <Component {...pageProps} />
        </QuizProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
