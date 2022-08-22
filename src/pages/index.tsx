import { PokeCard } from '@/components/PokeCard'
import { Layout } from '@/templates/Layout'
import { Pokemon } from 'src/types'
import { getPokemons } from './api/pokemons'

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
  const pokemons = await getPokemons()

  return {
    props: {
      pokemons
    }
  }
}
