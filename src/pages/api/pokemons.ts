// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { loadPokemons } from 'src/lib/load-pokemon'
import { NamedAPIResource, Pokemon } from 'src/types'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const data: NamedAPIResource[] = await loadPokemons()

    const pokemons: Pokemon[] = await Promise.all(data.map(async (pokemon) => {
      const pokemonInfo = await fetch(pokemon.url)
      const result = await pokemonInfo.json()
      return result
    }))

    res.status(200)
    res.json(
      {
        pokemons
      }
    )

  } catch (err) {
    res.status(500)
    res.json({ error: err })
  }
}
