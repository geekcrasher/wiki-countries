import { useContext, createContext, useEffect, useState } from "react"
import { fetchAllCountriesData } from "@/api"


type Country = {
  name: {
    common: string,
    official: string
  },
  population: number,
  region: string,
  capital: string[],
  subregion: string,
  maps: { googleMaps: string }
  continents: string[],
  // languages: {  }
  // currencies: { EUR: { name: string, symbol: string } }
  flags: { svg: string, alt: string }
  coatOfArms: { svg: string }
}

type CountriesContextType = {
  countries: Country[] | null
}

const CountriesContext = createContext<CountriesContextType | null>(null)

export const useCountries = () => {
  return useContext(CountriesContext) as CountriesContextType
}

export const CountriesContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [countries, setCountries] = useState<Country[] | null>(null)

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
    <CountriesContext.Provider value={{ countries }}>
      {children}
    </CountriesContext.Provider>
  )
}