import { render, screen } from '@testing-library/react'
import PokeCard from '@/components/PokeCard'
import { Pokemon } from '@/types/pokemons'

import { result } from '@/mock/pokemons'

const mockPokecardProps: Pokemon = result[0]

describe('PokeCard:', () => {
  beforeEach(() => {
    render(<PokeCard pokemon={mockPokecardProps} />)
  })

  it('should render the pokemon name received by props', () => {
    expect(screen.getByText(mockPokecardProps.name)).toBeTruthy()
  })

  it('should render the pokemon id number received by props', () => {
    const element = screen.getByText(
      `#${mockPokecardProps.id.toString().padStart(3, '0')}`
    )
    expect(element).toBeTruthy()
  })

  it('should render the pokemon image received by props', () => {
    const image = screen.getByTestId(`pokemon-image-${mockPokecardProps.id}`)
    expect(image).toBeTruthy()
  })
})
