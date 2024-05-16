import axios, { AxiosError } from "axios";


// @function for retrieving the data for all countries
export const fetchAllCountriesData = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all", {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    return response?.data
  } catch (error: unknown) {

    if (error instanceof AxiosError) {
      console.log(`Error fetching data: `, error.message)
      throw error
    }
  }
}

// @ function for retrieving the data for a specific country.
export const fetchSingleCountryData = async (countryName: string) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    return response?.data
  } catch (error: unknown) {

    if (error instanceof AxiosError) {
      console.log(`Error fetching data for "${countryName}":`, error.message)
      throw error
    }
  }
}

// @ function for retrieving the data for a specific country.
export const fetchCountryCode = async (borderName?: string[]) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${borderName?.join(',')}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    return response?.data
  } catch (error: unknown) {

    if (error instanceof AxiosError) {
      console.log(`Error fetching data for "${borderName}":`, error.message)
      throw error
    }
  }
}