import PokeCard from '@/components/PokeCard'
import { Pokemon } from '@/types/pokemons'
import { getPokemons } from './api/pokemons'

interface HomeProps {
  pokemons: Pokemon[]
}

function Home({ pokemons }: HomeProps) {
  return (
    <div data-testid='homepage'>
      {pokemons.map((pokemon, index) => (
        <PokeCard
          key={index}
          pokemon={pokemon}
        />
      ))}
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
