import { render, screen } from '@testing-library/react';
import Home from '@/pages/index'

import '@testing-library/jest-dom'
import { Pokemon } from 'src/types';

const mockData: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
      }
    }
  },
  {
    id: 2,
    name: 'ivysaur',
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
        }
      }
    }
  },
  {
    id: 3,
    name: 'venusaur',
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
        }
      }
    }
  }
]

describe('HomePage:', () => {
  it('should render correctly', () => {
    render(<Home pokemons={mockData} />)

    const h1 = screen.getByText('Hello Next.js')
    expect(h1).toBeInTheDocument();
  })
})
