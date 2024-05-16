import React from "react";
import { useCountries } from "@/context/CountriesContext";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { formattedPopulation } from "@/lib/formattedPopulation";
import { Paragraph } from "@/components/shared/Paragraph";


const Content = React.memo(() => {

  const { countries, countrySearch, region } = useCountries()

  const filteredCountry = countries?.filter(country => {
    const searchCountry = country.name.common.toLowerCase().includes(countrySearch.toLowerCase());
    const searchRegion = country.region.toLowerCase() === region

    if (region === 'all') {
      return country
    }

    return searchCountry && searchRegion
  })

  return (
    <>
      {filteredCountry?.map(country => {
        return (
          <Link to={`/country/${country.name.common}`} key={country.name.common} className="shadow-md overflow-hidden rounded-lg">
            <Card className="h-[20rem] md:h-[22rem] p-0 border-0 overflow-hidden">
              <CardHeader
                className="h-[10rem] md:h-[12rem] p-0 bg-contain bg-no-repeat bg-center "
                style={{ backgroundImage: `url(${country.flags.svg})` }}
              >
              </CardHeader>
              <CardContent className="mt-2">
                <h2 className="text-xl mb-2 font-medium">{country.name.common}</h2>
                <section className="text-sm space-y-1 mt-4">
                  <Paragraph label="Population" countryInfo={formattedPopulation(country.population)} />
                  <Paragraph label="Region" countryInfo={country.region} />
                  <Paragraph label="Capital" countryInfo={country.capital} />
                </section>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </>
  );
})

export default Content;