import { createContext, useContext, useEffect, useState } from "react"

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme,
  handleChangeTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useCountries must be used within a CountriesProvider')
  }
  return context
}

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme && storedTheme === 'dark') {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  const handleChangeTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}