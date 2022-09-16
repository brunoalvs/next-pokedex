import { PokeList } from '@/components/PokeList'
import { Pokemon } from '@/types/pokemons'
import { getPokemons } from './api/pokemons'

interface HomeProps {
  pokemons: Pokemon[]
}

function Home({ pokemons }: HomeProps) {
  return (
    <div data-testid='homepage'>
      <PokeList pokemons={pokemons} />
    </div>
  )
}

export async function getStaticProps() {
  const pokemons = await getPokemons()

  return {
    props: {
      pokemons,
    },
  }
}

export default Home
