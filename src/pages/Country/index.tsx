import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountrySkeleton from "@/components/Skeleton/CountrySkeleton";

const CountryDetails = lazy(() => import('@/components/Content/CountryDetails'))

const Country = () => {

  const navigate = useNavigate()

  return (
    <>
      <section className="flex flex-col gap-8 sm:gap-16 mt-[5.5rem] py-12 sm:py-14 px-6 sm:px-16 xl:px-32">
        <Button onClick={() => navigate(-1)} className="flex items-center justify-center gap-1 w-28 border text-slate-800 dark:border-0 dark:bg-[#2b3945] dark:text-slate-50">
          <MoveLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Suspense fallback={<CountrySkeleton />}>
          <CountryDetails />
        </Suspense>

      </section >
    </>
  );
}

export default Country;