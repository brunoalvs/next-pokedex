import { render, screen } from '@testing-library/react'
import { Logo } from '.'

describe('Logo', () => {
  it('should render logo', () => {
    render(<Logo />)
    expect(screen.getByText(/Pokédex/i)).toBeInTheDocument()
  })
})
