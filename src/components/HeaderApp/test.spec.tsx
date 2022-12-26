import { HeaderApp } from '@/components/HeaderApp'
import { render, screen } from '@testing-library/react'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/'
    }
  }
}))

describe('Components/HeaderApp:', () => {
  it('shoud render header with logo', () => {
    render(<HeaderApp />)
    const logo = screen.getByRole('heading', {
      name: /Pokédex/i
    })
    expect(logo).toBeTruthy()
  })
})
