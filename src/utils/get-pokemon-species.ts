import { fetchPokemons } from './fetch-pokemons'

type PokemonSpeciesReturn = {
  flavor_text: string
  is_legendary: boolean
  names: {
    name: string
    language: {
      name: string
    }
  }[]
}

type PokemonSpeciesResponseFromApi = {
  flavor_text_entries: {
    flavor_text: string
    language: {
      name: string
    }
  }[]
  is_legendary: boolean
  names: {
    name: string
    language: {
      name: string
    }
  }[]
}

export const getPokemonSpecies = async (id: number): Promise<PokemonSpeciesReturn> => {
  const data: PokemonSpeciesResponseFromApi = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)

  const response: PokemonSpeciesReturn = {
    flavor_text: data.flavor_text_entries.find((item) => item.language.name === 'en')?.flavor_text || '',
    is_legendary: data.is_legendary,
    names: data.names.filter((item) => item.language.name === 'en' || item.language.name === 'ja')
  }

  return response
}
