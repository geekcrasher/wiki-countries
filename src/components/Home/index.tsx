import { lazy, Suspense } from "react";
import SearchBar from "@/components/Searchbar";
import CountriesSkeleton from "@/components/Skeleton/CountriesSkeleton";
import { useCountries } from "@/context/CountriesContext";

const Content = lazy(() => import("@/components/Content"))

const Home = () => {

  const { length } = useCountries()

  return (
    <section className="flex flex-col relative mt-20 py-16 px-10 md:px-16 lg:px-20 min-h-[calc(100vh-5.5rem)] ">
      <SearchBar />
      <section className="relative grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 mt-14">
        <Suspense fallback={<CountriesSkeleton />}>
          <Content />
        </Suspense>
      </section>
      {length === 0 && (
        <section className=" my-auto">
          <figure className="flex flex-col items-center w-[16rem] h-[16rem] sm:w-[19rem] sm:h-[19rem]  md:w-[22rem] md:h-[22rem] mx-auto -mt-14">
            <img src="/no-data.svg" alt="not data found" className="w-full h-full" />
            <figcaption className="text-gray-400 font-normal text-sm md:text-base">No data found.</figcaption>
          </figure>
        </section>
      )}
    </section>
  );
}

export default Home;