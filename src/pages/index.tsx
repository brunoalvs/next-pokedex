import { PokeCard } from '@/components/PokeCard'
import { Layout } from '@/templates/Layout'
import { getPokemonInfo } from '@/utils/get-pokemon-info'
import { loadPokemons } from '@/utils/load-pokemon'
import { NamedAPIResource, Pokemon } from 'src/types'

interface HomeProps {
  pokemons: Pokemon[]
}

function Home({ pokemons }: HomeProps) {

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
