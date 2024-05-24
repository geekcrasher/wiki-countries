import axios, { AxiosError } from "axios";
import { type Country } from "@/lib/types";


// @function for retrieving the data for all countries
export const fetchAllCountriesData = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>("https://restcountries.com/v3.1/all", {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    return response?.data
  } catch (error: unknown) {

    if (error instanceof AxiosError) {
      console.log(`Error fetching data: `, error.message)
      throw error
    } else {
      console.error(`Unexpected error while fetching the data":`, error);
      throw new Error(`Unexpected error: ${error}`);
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
    } else {
      console.error(`Unexpected error while fetching data for "${borderName}":`, error);
      throw new Error(`Unexpected error: ${error}`);
    }
  }
}