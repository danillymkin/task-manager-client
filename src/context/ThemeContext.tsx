import React, { FunctionComponent } from 'react'

interface ThemeProviderProps {
  initialTheme?: string
  children: React.ReactNode
}

type Props = ThemeProviderProps

const getInitialTheme = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const localStoragePrefer = window.localStorage.getItem('theme')
    if (localStoragePrefer) {
      return localStoragePrefer
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'light'
}

export const ThemeContext = React.createContext({})

export const ThemeProvider: FunctionComponent<Props> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = React.useState(getInitialTheme)

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('color-theme', rawTheme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
