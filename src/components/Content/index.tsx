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
import { url } from "inspector";

const Content = React.memo(() => {

  const { countries } = useCountries()

  const data = countries?.find(country => country.name.common === 'Germany')

  console.log(data)

  return (
    <>
      <section className="grid 2xl:grid-cols-4 gap-14 mt-14">
        {countries?.map(country => {
          return (
            <section key={country.name.common} className="shadow-md">
              <Card className="h-[22rem] p-0 border-0 overflow-hidden">
                <CardHeader
                  className="h-[12rem] p-0 bg-contain bg-no-repeat bg-center "
                  style={{ backgroundImage: `url(${country.flags.svg})` }}
                >
                </CardHeader>
                <CardContent className="mt-4">
                  <h2 className="text-xl mb-2 font-medium">{country.name.common}</h2>
                  <div>
                    <p className="font-medium">Population: <span className="font-normal">{country.population}</span></p>
                    <p className="font-medium">Region: <span className="font-normal">{country.region}</span></p>
                    <p className="font-medium">Capital: <span className="font-normal">{country.capital}</span></p>
                  </div>
                </CardContent>
              </Card>
            </section>
          )
        })}
      </section>
    </>
  );
})

export default Content;