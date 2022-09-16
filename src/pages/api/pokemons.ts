// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { getPokemons as loadPokemons } from '@/utils/get-pokemons'
import { getPokemonInfoToCard } from '@/utils/get-pokemon-infocard'

export const getPokemons = async () => {
  const data = await loadPokemons()

  const pokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const info = await getPokemonInfoToCard(pokemon.name)
      return info
    })
  )

  return pokemons
}

export default async function getPokemonsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  try {
    const pokemons = await getPokemons()
    res.status(200)
    res.json({ pokemons })
  } catch (err) {
    res.status(500)
    res.json({ error: err })
  }
}
