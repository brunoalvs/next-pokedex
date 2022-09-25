import { PokeDetail } from '@/components/PokeDetail'
import { QParams } from '@/types/global'
import { Pokemon } from '@/types/pokemons'
import { getPokemonByName } from '@/utils/get-pokemon-by-name'
import { getPokemons } from '@/utils/get-pokemons'
import { GetStaticPaths } from 'next'
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
      <PokeDetail name='Bulbasaur' jpname='フシギダネ' />
      {/* <h2>{pokemon.name}</h2>
      <p>{pokemon.id.toString().padStart(4, '#00')}</p>
      <Image width={240} height={240} alt={`${pokemon.name} sprite`} src={pokemon.sprites.front_default ?? ''} style={{ imageRendering: 'pixelated' }} />
      <Image width={512} height={512} alt={`${pokemon.name} sprite`} src={pokemon.sprites.other['official-artwork'].front_default} /> */}
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
