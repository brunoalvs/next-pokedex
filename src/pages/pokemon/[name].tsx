import { QParams } from '@/types/global'
import { Pokemon } from '@/types/pokemons'
import { getPokemonByName } from '@/utils/get-pokemon-by-name'
import { getPokemons } from '@/utils/get-pokemons'
import { GetStaticPaths } from 'next'
import Image from 'next/image'
import { ReactElement } from 'react'

interface PokemonPageProps {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: PokemonPageProps): ReactElement => {

  if (pokemon === null || pokemon === undefined) {
    return <div>Pokémon Not Found</div>
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>{pokemon.id.toString().padStart(4, '#00')}</p>
      <Image width={120} height={120} alt={`${pokemon.name} sprite`} src={pokemon.sprites.front_default ?? ''} style={{ imageRendering: 'pixelated' }} />
    </div>
  )
}

export default PokemonPage

export const getStaticProps = async ({ params }: {
  params: QParams
}) => {

  const { name } = params

  const pokemon = await getPokemonByName(name as string)

  return {
    props: {
      pokemon,
    },
  }
}

export const getStaticPaths: GetStaticPaths<QParams> = async () => {
  const res = await getPokemons(0)

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
