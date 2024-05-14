import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "@/context/CountriesContext";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/shared/Paragraph";
import { formattedPopulation } from "@/lib/formattedPopulation";
import { fetchCountryCode } from "@/api";
import { type Country as CountryType } from "@/lib/types";
import CountryBorder from "./CountryBorder";

const Country = () => {

  const [currency, setCurrency] = useState('')
  const [languages, setLanguages] = useState('')
  const [countryBorder, setCountryBorder] = useState<string[] | null>(null)
  const { name } = useParams()
  const navigate = useNavigate()
  const { countries } = useCountries()

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
      <section className="flex flex-col gap-8 sm:gap-16 mt-[5.5rem] py-12 sm:py-14 px-6 sm:px-16 xl:px-32">
        <Button onClick={() => navigate(-1)} className="flex items-center justify-center gap-1 w-28 border dark:border-slate-400 text-black dark:text-slate-50">
          <MoveLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <section className="block 2xl:flex items-center gap-10 mx-auto">
          <section className="max-h-[350px] max-w-[650px] mx-auto 2xl:mx-0">
            <img
              src={`${selectedCountry?.flags.svg}`}
              className="w-full h-full object-cover"
            />
          </section>
          <article className="flex flex-col mt-16 2xl:ml-14 md:mt-24 2xl:mt-0 dark:text-slate-50">
            <h1 className="text-xl md:text-3xl font-bold font-inter">{selectedCountry?.name.common}</h1>
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
      </section >
    </>
  );
}

export default Country;