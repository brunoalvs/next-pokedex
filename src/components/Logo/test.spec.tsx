import { Logo } from '@/components/Logo'
import { render, screen, cleanup } from '@testing-library/react'

describe('Logo', () => {
  beforeEach(() => {
    render(<Logo />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render logo with Pokédex name', () => {
    expect(screen.getByText(/Pokédex/i)).toBeInTheDocument()
  })
})
