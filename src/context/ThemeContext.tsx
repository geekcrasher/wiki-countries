import { createContext, useContext, useEffect, useState } from "react"

type Theme = 'light' | 'dark'

type ThemeContextType = {
  darkMode: boolean,
  theme: Theme,
  handleChangeTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = () => {
  return useContext(ThemeContext) as ThemeContextType
}

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [darkMode, setDarkMode] = useState(false)
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleChangeTheme = (): void => {
    setDarkMode(!darkMode)
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ darkMode, theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}