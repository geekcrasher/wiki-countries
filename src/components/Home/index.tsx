import { lazy, Suspense } from "react";
import SearchBar from "@/components/Searchbar";
import CountriesSkeleton from "@/components/Skeleton/CountriesSkeleton";

const Content = lazy(() => import("@/components/Content"))

const Home = () => {
  return (
    <section className="flex flex-col relative mt-20 py-16 px-10 md:px-16 lg:px-20 min-h-[calc(100vh-5.5rem)]">
      <SearchBar />
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 mt-14">
        <Suspense fallback={<CountriesSkeleton />}>
          <Content />
        </Suspense>
      </section>
    </section>
  );
}

export default Home;