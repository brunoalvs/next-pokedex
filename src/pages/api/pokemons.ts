// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { NamedAPIResource, Pokemon } from 'src/types'

export async function loadPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await res.json()

  return data.results
}

export async function getPokemonInfo(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  const result: Pokemon = {
    id: data.id,
    name: data.name,
    sprites: {
      front_default: data.sprites.front_default,
      other: {
        'official-artwork': {
          front_default: data.sprites.other['official-artwork'].front_default,
        }
      }
    },
    stats: data.stats
  }

  return result;
}

export const getPokemons = async () => {
  const data: NamedAPIResource[] = await loadPokemons()

  const pokemons = await Promise.all(data.map(async (pokemon) => {
    const info = await getPokemonInfo(pokemon.name)
    return info
  }))

  return pokemons
}

export default async function getPokemonsHandler (req: NextApiRequest, res: NextApiResponse) {

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
