import { PokeList } from '@/components/PokeList'
import { Pokemon } from '@/types/pokemons'
import { loadPokemons } from '@/utils/load-pokemons'
import { useState } from 'react'

interface HomeProps {
  pokemons: Pokemon[]
}

function Home({ pokemons }: HomeProps) {
  const [pokemonsList, setPokemonsList] = useState(pokemons)

  const morePokemons = async () => {
    const newPokemons = await loadPokemons(pokemonsList.length)
    setPokemonsList([...pokemonsList, ...newPokemons as Pokemon[]])
  }

  return (
    <div data-testid='homepage'>
      <PokeList pokemons={pokemonsList} />
      <button
        onClick={async () => morePokemons()}
      >
        Load More
      </button>
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
