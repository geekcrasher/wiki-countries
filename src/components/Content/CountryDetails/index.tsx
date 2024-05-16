import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom"
import { useCountries } from "@/context/CountriesContext"
import { type Country as CountryType } from "@/lib/types";
import { fetchCountryCode } from "@/api";
import { formattedPopulation } from "@/lib/formattedPopulation";
import { Paragraph } from "@/components/shared/Paragraph";
import CountryBorder from "../CountryBorder";

const CountryDetails = () => {

  const [currency, setCurrency] = useState('')
  const [languages, setLanguages] = useState('')
  const [countryBorder, setCountryBorder] = useState<string[] | null>(null)
  const { countries } = useCountries()
  const { name } = useParams()


  const selectedCountry = countries && countries?.find(country => country.name.common === name)

  useMemo(() => {
    if (selectedCountry) {
      Object.keys(selectedCountry.currencies).forEach(key => {
        setCurrency(selectedCountry.currencies[key].name)
      })

      const languageValues = Object.values(selectedCountry.languages).join(', ')
      setLanguages(languageValues)
    }

  }, [selectedCountry])


  useEffect(() => {
    const getCountryCodes = async () => {
      if (selectedCountry) {
        const res: CountryType[] = await fetchCountryCode(selectedCountry?.borders)
        const borderCountry = res?.map(country => country.name.common)
        setCountryBorder(borderCountry)
      }
    }

    getCountryCodes()
  }, [selectedCountry])

  return (
    <>
      <section className="block 2xl:flex items-center gap-10 mx-auto">
        <section className="max-h-[350px] max-w-[650px] mx-auto 2xl:mx-0">
          <img
            src={`${selectedCountry?.flags.svg}`}
            className="w-full h-full object-cover"
            alt={`${name}'s flag`}
          />
        </section>
        <article className="flex flex-col mt-16 2xl:ml-14 md:mt-24 2xl:mt-0 dark:text-slate-50">
          <h1 className="text-xl md:text-3xl font-bold">{selectedCountry?.name.common}</h1>
          <section className="md:flex gap-24 mt-8 text-[0.925rem]">
            <section className="space-y-2">
              <Paragraph label="Official Name" countryInfo={selectedCountry?.name.official} />
              <Paragraph label="Population" countryInfo={formattedPopulation(selectedCountry?.population)} />
              <Paragraph label="Region" countryInfo={selectedCountry?.region} />
              <Paragraph label="Sub Region" countryInfo={selectedCountry?.subregion} />
              <Paragraph label="Capital" countryInfo={selectedCountry?.capital} />
            </section>
            <section className="space-y-2 mt-8 md:mt-0">
              <Paragraph label="Top Level Domain" countryInfo={selectedCountry?.tld} />
              <Paragraph label="Currency" countryInfo={currency} />
              <Paragraph label="Languages" countryInfo={languages} />
            </section>
          </section>
          <section className="mt-8 gap-4 space-y-4">
            <CountryBorder countryBorder={countryBorder} />
          </section>
        </article>
      </section>
    </>
  );
}

export default CountryDetails;