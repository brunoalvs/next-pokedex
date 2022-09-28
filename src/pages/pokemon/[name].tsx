import { PokeDetail } from '@/components/PokeDetail'
import { QParams } from '@/types/global'
import { PokemonStat, PokemonType } from '@/types/pokemons'
import { getPokemonByName } from '@/utils/get-pokemon-by-name'
import { getPokemonSpecies } from '@/utils/get-pokemon-species'
import { getPokemons } from '@/utils/get-pokemons'
import { GetStaticPaths } from 'next'
import { ReactElement } from 'react'

interface PokemonPageProps {
  pokemon: {
    flavor_text: string;
    is_legendary: boolean;
    names: {
      name: string;
      language: {
        name: string;
      };
    }[];
    id: number;
    name: string;
    sprites: {
      front_default: string;
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    height: number;
    weight: number;
    stats: PokemonStat[];
    types: PokemonType[];
  }
}

const PokemonPage = ({ pokemon }: PokemonPageProps): ReactElement => {

  if (pokemon === null || pokemon === undefined) {
    return <div>Pokémon Not Found</div>
  }

  return (
    <>
      <PokeDetail
        id={pokemon.id}
        name={pokemon.name}
        jpname={pokemon.names[1].name}
        sprite={pokemon.sprites.other['official-artwork'].front_default}
        types={pokemon.types as PokemonType[]}
        height={pokemon.height as number}
        weight={pokemon.weight as number}
        stats={pokemon.stats as PokemonStat[]}
        flavorText={pokemon.flavor_text.replace(/\u0000/g, '')}
      />
    </>
  )
}

export default PokemonPage

export const getStaticProps = async ({ params }: {
  params: QParams
}) => {

  const { name } = params

  const pokemonInfo = await getPokemonByName(name as string)
  const species = await getPokemonSpecies(pokemonInfo.id)

  const pokemon = {
    ...pokemonInfo,
    ...species
  }

  return {
    props: {
      pokemon,
    },
  }
}

export const getStaticPaths: GetStaticPaths<QParams> = async () => {
  const res = await getPokemons()

  const paths = res.results.map((pokemon) => {
    return {
      params: {
        name: pokemon.name
      }
    }
  })

  return {
    paths,
    fallback: true,
  }
}
