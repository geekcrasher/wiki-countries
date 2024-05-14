
type Name = {
  common: string,
  official: string
}

type Currency = {
  name: string,
  symbol: string
}

type Flag = {
  svg: string,
  alt: string
}


export type Country = {
  name: Name,
  population: number,
  region: string,
  capital: string[],
  subregion: string,
  maps: { googleMaps: string }
  continents: string[],
  languages: { [key: string]: string }
  currencies: { [key: string]: Currency }
  flags: Flag
  coatOfArms: { svg: string }
  borders?: string[]
  tld: string[]
}