// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPokemonInfo } from '@/utils/get-pokemon-info'
import { loadPokemons } from '@/utils/load-pokemon'
import { NamedAPIResource } from 'src/types'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const data: NamedAPIResource[] = await loadPokemons()

    const pokemons = await Promise.all(data.map(async (pokemon) => {
      const info = await getPokemonInfo(pokemon.name)
      return info
    }))

    res.status(200)
    res.json({ pokemons })

  } catch (err) {
    res.status(500)
    res.json({ error: err })
  }
}
