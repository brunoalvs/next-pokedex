import { NextApiRequest, NextApiResponse } from 'next'
import { ResponseGetPokemons } from '@/types/pokemons'

export const fetchPokemons = async (): Promise<ResponseGetPokemons> => {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const result: ResponseGetPokemons = await data.json()

  return result
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pokemons = await fetchPokemons()

  return res.status(200).json(pokemons)
}
