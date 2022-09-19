// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { loadPokemons } from '@/utils/load-pokemons'

export default async function getPokemonsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const pokemons = await loadPokemons()
    res.status(200)
    res.json({ pokemons })
  } catch (err) {
    res.status(500)
    res.json({ error: err })
  }
}
