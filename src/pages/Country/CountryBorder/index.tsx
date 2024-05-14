import { Link } from "react-router-dom";

type CountryBorderType = {
  countryBorder: string[] | null
}

const CountryBorder = ({ countryBorder }: CountryBorderType) => {
  return (
    <>
      {countryBorder && (
        <>
          <p>Border Countries: {countryBorder?.length > 0 ?? <span className="dark:text-gray-400">NA</span>}</p>
          {countryBorder?.length > 0 && (
            <section className=" h-auto flex flex-wrap max-w-[45rem] gap-2">
              {countryBorder?.map(border => (
                <Link
                  to={`/country/${border}`}
                  key={border}
                  className="px-4 py-1 mx-2 dark:bg-[#2b3945] shadow-xl"
                >{border}</Link>)
              )}
            </section>
          )}
        </>
      )}
    </>
  );
}

export default CountryBorder;