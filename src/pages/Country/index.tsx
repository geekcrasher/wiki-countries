import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "@/context/CountriesContext";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/shared/Paragraph";
import { formattedPopulation } from "@/lib/formattedPopulation";


const Country = () => {

  const [currency, setCurrency] = useState('')
  const [languages, setLanguages] = useState('')
  const { name } = useParams()
  const navigate = useNavigate()
  const { countries } = useCountries()

  const selectedCountry = countries && countries?.find(country => country.name.common === name)

  useMemo(() => {
    selectedCountry && Object.keys(selectedCountry?.currencies).forEach(key => {
      setCurrency(selectedCountry?.currencies[key].name)
    })

    const languageValues = selectedCountry && Object.values(selectedCountry?.languages).join(', ')
    languageValues && setLanguages(languageValues)

  }, [selectedCountry])


  return (
    <>
      <section className="flex flex-col gap-16 mt-[5.5rem] py-16 px-32 ">
        <Button onClick={() => navigate(-1)} className="flex items-center gap-1 w-28 border text-black shadow-">
          <MoveLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <section className="grid grid-cols-2  gap-16  w-full h-fit">
          <section
            className="h-[325px] w-[625px] 2xl:h-[450px] 2xl:w-[750px] col-span-1 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${selectedCountry?.flags.svg})` }}
          ></section>
          <article className=" w-full py-20">
            <h1 className="text-3xl font-bold font-inter">{selectedCountry?.name.common}</h1>
            <section className="flex gap-24 mt-6">
              <section className="text-xl">
                <Paragraph label="Official Name" countryInfo={selectedCountry?.name.official} />
                <Paragraph label="Population" countryInfo={formattedPopulation(selectedCountry?.population)} />
                <Paragraph label="Region" countryInfo={selectedCountry?.region} />
                <Paragraph label="Sub Region" countryInfo={selectedCountry?.subregion} />
                <Paragraph label="Capital" countryInfo={selectedCountry?.capital} />
              </section>
              <section className="text-xl">
                <Paragraph label="Top Level Domain" countryInfo={selectedCountry?.tld} />
                <Paragraph label="Currency" countryInfo={currency} />
                <Paragraph label="Languages" countryInfo={languages} />
              </section>
            </section>
          </article>
        </section>
      </section>
    </>
  );
}

export default Country;