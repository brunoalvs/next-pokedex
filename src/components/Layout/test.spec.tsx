import { render, screen } from '@testing-library/react'
import { Layout } from '@/components/Layout'
import '@testing-library/jest-dom'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/'
    }
  }
}))

describe('Template/Layout:', () => {
  it('should render with Children', () => {
    render(
      <Layout>
        <h1>Children Example!</h1>
      </Layout>
    )
    expect(screen.getByText(/children example/i)).toBeTruthy()
  })
})
