import Skeleton from "./SkeletonCard";

const CountriesSkeleton = () => {
  const countrySkeleton = Array.from({ length: 15 }, (index: number) => {
    return <Skeleton key={index} />
  });

  return countrySkeleton;
}

export default CountriesSkeleton;