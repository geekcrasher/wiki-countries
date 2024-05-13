import { useCountries } from "@/context/CountriesContext";
import React from "react";
import SearchBar from "../Searchbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";
import { formattedPopulation } from "@/lib/formattedPopulation";
import { Paragraph } from "@/components/shared/Paragraph";


const Content = React.memo(() => {

  const { countries, countrySearch } = useCountries()

  const filteredCountry = countries?.filter(country => {
    return country.name.common.toLowerCase().includes(countrySearch.toLowerCase())
  })

  return (
    <>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 mt-14">
        {filteredCountry?.map(country => {
          return (
            <Link to={`/country/${country.name.common}`} key={country.name.common} className="shadow-md">
              <Card className="h-[20rem] md:h-[22rem] p-0 border-0 overflow-hidden">
                <CardHeader
                  className="h-[10rem] md:h-[12rem] p-0 bg-contain bg-no-repeat bg-center "
                  style={{ backgroundImage: `url(${country.flags.svg})` }}
                >
                </CardHeader>
                <CardContent className="mt-4">
                  <h2 className="text-xl mb-2 font-medium">{country.name.common}</h2>
                  <section>
                    <Paragraph label="Population" countryInfo={formattedPopulation(country.population)} />
                    <Paragraph label="Region" countryInfo={country.region} />
                    <Paragraph label="Capital" countryInfo={country.capital} />
                  </section>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </section>
    </>
  );
})

export default Content;