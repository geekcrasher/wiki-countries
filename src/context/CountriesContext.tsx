import { useContext, createContext, useEffect, useState } from "react"
import { fetchAllCountriesData } from "@/api"
import { type Country } from "@/lib/types"

type StringStateSetter = React.Dispatch<React.SetStateAction<string>>

type CountriesContextType = {
  countries: Country[] | null
  countrySearch: string
  region: string,
  length: number
  setCountrySearch: StringStateSetter
  setRegion: StringStateSetter
  setLength: React.Dispatch<React.SetStateAction<number>>
}

const CountriesContext = createContext<CountriesContextType | null>(null)


export const useCountries = (): CountriesContextType => {
  const context = useContext(CountriesContext)
  if (!context) {
    throw new Error('useCountries must be used within a CountriesProvider')
  }
  return context
}

export const CountriesContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [countries, setCountries] = useState<Country[] | null>(null)
  const [countrySearch, setCountrySearch] = useState('')
  const [region, setRegion] = useState('all')
  const [length, setLength] = useState(0)

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
    <CountriesContext.Provider value={{
      countries,
      countrySearch,
      setCountrySearch,
      region,
      setRegion,
      length,
      setLength
    }}>
      {children}
    </CountriesContext.Provider>
  )
}