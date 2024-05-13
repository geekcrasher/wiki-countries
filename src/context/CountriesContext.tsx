import { useContext, createContext, useEffect, useState } from "react"
import { fetchAllCountriesData } from "@/api"
import { type Country } from "@/lib/types"


type CountriesContextType = {
  countries: Country[] | null
  countrySearch: string,
  setCountrySearch: React.Dispatch<React.SetStateAction<string>>
}

const CountriesContext = createContext<CountriesContextType | null>(null)

export const useCountries = () => {
  return useContext(CountriesContext) as CountriesContextType
}

export const CountriesContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [countries, setCountries] = useState<Country[] | null>(null)
  const [countrySearch, setCountrySearch] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetchAllCountriesData()
        setCountries(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCountries()
  }, [])

  return (
    <CountriesContext.Provider value={{ countries, countrySearch, setCountrySearch }}>
      {children}
    </CountriesContext.Provider>
  )
}