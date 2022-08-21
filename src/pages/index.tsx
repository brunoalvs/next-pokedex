import { useEffect } from 'react'
import { PokeCard } from '@/components/PokeCard'
import { Layout } from '@/templates/Layout'
import { loadPokemons } from 'src/lib/load-pokemon'
import { getPokemonInfo } from 'src/lib/get-pokemon-info'
import { NamedAPIResource, Pokemon } from 'src/types'

interface HomeProps {
  pokemons: Pokemon[]
}

function Home({ pokemons }: HomeProps) {

  useEffect(() => {
    // eslint-disable-next-line
    console.log('pokemons', pokemons)
  }, [pokemons])

  return (
    <Layout>
      <div className="container">
        <h1>Hello Next.js</h1>

        {pokemons.map((pokemon, index) => (
          <PokeCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const data: NamedAPIResource[] = await loadPokemons()

  const pokemons = await Promise.all(data.map(async (pokemon) => {
    const info = await getPokemonInfo(pokemon.name)

    return info
  }))

  return {
    props: {
      pokemons
    }
  }
}
