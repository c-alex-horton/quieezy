import { createContext, useState, FC, ReactNode } from 'react'

interface IThemeContext {
  theme: string
  toggleTheme?: () => void
}

const defaultValue = {
  theme: 'dark',
}

export const ThemeContext = createContext<IThemeContext>(defaultValue)

type Props = {
  children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
