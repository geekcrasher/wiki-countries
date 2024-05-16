const CountrySkeleton = () => {
  return (
    <section className="animate-pulse bg-muted block 2xl:flex items-center gap-10 md:mx-auto">
      {/* flags */}
      <section className="w-[650px] h-[250px] md:h-[350px]  max-sm:w-full max-md:w-full mx-auto 2xl:mx-0 bg-gray-200/60 dark:bg-[#2b3945]"></section>
      {/* details */}
      <section className="flex flex-col mt-16 2xl:ml-14 md:mt-24 2xl:mt-0 dark:text-slate-50">
        {/* name */}
        <section className="h-8 w-64 bg-gray-200/60 dark:bg-[#2b3945] rounded"></section>
        {/* info */}
        <section className="md:flex gap-24 mt-8 text-[0.925rem]">
          <section className="space-y-2">
            <section className="h-4 w-60 bg-gray-200/60 dark:bg-[#2b3945]"></section>
            <section className="h-4 w-52 bg-gray-200/60 dark:bg-[#2b3945]"></section>
            <section className="h-4 w-40 bg-gray-200/60 dark:bg-[#2b3945]"></section>
            <section className="h-4 w-56 bg-gray-200/60 dark:bg-[#2b3945]"></section>
          </section>
          <section className="space-y-2 mt-8 md:mt-0">
            <section className="h-4 w-48 bg-gray-200/60 dark:bg-[#2b3945]"></section>
            <section className="h-4 w-56 bg-gray-200/60 dark:bg-[#2b3945]"></section>
            <section className="h-4 w-44 bg-gray-200/60 dark:bg-[#2b3945]"></section>
          </section>
        </section>
        {/* border */}
        <section className="mt-8 gap-4 space-y-4">
          <section className="h-8 w-48 bg-gray-200/60 dark:bg-[#2b3945]"></section>
          <section className="flex space-x-2">
            <section className="h-6 w-20 bg-gray-200/60 dark:bg-[#2b3945]"></section>
            <section className="h-6 w-20 bg-gray-200/60 dark:bg-[#2b3945]"></section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default CountrySkeleton;