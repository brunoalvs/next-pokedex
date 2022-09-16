import { GetPokemonsResponse } from '@/types/default'

export const getPokemons = async (): Promise<GetPokemonsResponse> => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data: GetPokemonsResponse = await res.json()

  return data
}
