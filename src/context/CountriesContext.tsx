import { useContext, createContext, useEffect, useState } from "react"
import { fetchAllCountriesData } from "@/api"

type CountriesContextType<T> = {
  country: T | null
}

const CountriesContext = createContext<CountriesContextType<unknown> | null>(null)

export const useCountries = <T,>() => {
  return useContext(CountriesContext) as CountriesContextType<T>
}

export const CountriesContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [country, setCountries] = useState<unknown | null>(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetchAllCountriesData()
        console.log(response)
        setCountries(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCountries()
  }, [])

  return (
    <CountriesContext.Provider value={{ country }}>
      {children}
    </CountriesContext.Provider>
  )
}