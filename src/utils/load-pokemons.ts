import { getPokemons } from './get-pokemons'
import { getPokemonInfoToCard } from './get-pokemon-infocard'

export const loadPokemons = async (pokeLenght = 0 ) => {
  try {
    const pokemons = await getPokemons(pokeLenght)
    const pokemonsInfo = await Promise.all(
      pokemons.results.map(async pokemon => getPokemonInfoToCard(pokemon.name))
    )
    return pokemonsInfo
  } catch (err) {
    return err
  }
}
