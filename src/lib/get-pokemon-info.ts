import { Pokemon } from 'src/types';

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
