import { render, screen } from '@testing-library/react'
import { PokeCard } from '@/components/PokeCard'

describe('PokeCard', () => {
  it('should render PokeCard', () => {
    render(<PokeCard />)
    expect(screen.getByRole('heading', { name: 'PokeCard' })).toBeTruthy()
  })
})
