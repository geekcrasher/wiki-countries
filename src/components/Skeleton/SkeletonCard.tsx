const Skeleton = () => {
  return (
    <section className="animate-pulse h-[20rem] md:h-[22rem] bg-muted rounded-lg">
      <section className="h-[10rem] md:h-[12rem] bg-gray-200/50 dark:bg-[#2b3945] rounded"></section>
      <section className="mt-4">
        <section className=" w-[14rem] h-6 rounded bg-gray-200/50 dark:bg-[#2b3945]"></section>
        <section className="space-y-3 mt-6">
          <section className="w-[8rem] h-4 rounded bg-gray-200/50 dark:bg-[#2b3945]"></section>
          <section className="w-[8rem] h-4 rounded bg-gray-200/50 dark:bg-[#2b3945]"></section>
          <section className="w-[8rem] h-4 rounded bg-gray-200/50 dark:bg-[#2b3945]"></section>
        </section>
      </section>
    </section>
  );
}

export default Skeleton;