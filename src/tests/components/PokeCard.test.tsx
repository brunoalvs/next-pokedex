import { render, screen } from '@testing-library/react'
import { PokeCard } from '@/components/PokeCard'
import { Pokemon } from 'src/types'

const mockPokecardProps: Pokemon = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      }
    }
  }
}

describe('PokeCard:', () => {
  beforeEach(() => {
    render(<PokeCard pokemon={mockPokecardProps} />)
  })

  it('should render the pokemon name received by props', () => {
    expect(screen.getByText(mockPokecardProps.name)).toBeTruthy()
  })

  it('should render the pokemon id number received by props', () => {
    const element = screen.getByText(`#${mockPokecardProps.id.toString().padStart(3, '0')}`)
    expect(element).toBeTruthy()
  })

  it('should render the pokemon image received by props', () => {
    const image = screen.getByTestId('pokemon-image')
    expect(image).toBeTruthy()
  })

})
