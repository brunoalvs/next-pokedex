import { PokeList } from '@/components/PokeList'
import { Pokemon } from '@/types/pokemons'
import { loadPokemons } from '@/utils/load-pokemons'

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
  const pokemons = await loadPokemons()

  return {
    props: {
      pokemons,
    },
  }
}

export default Home
