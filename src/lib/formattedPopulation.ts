
export const formattedPopulation = (populations?: number) => {
  const population = new Intl.NumberFormat("en-US")
  const formattedPopulation = populations && population.format(populations)
  return formattedPopulation
}