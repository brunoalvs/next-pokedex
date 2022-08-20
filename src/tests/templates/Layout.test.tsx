import { render, screen } from '@testing-library/react'
import { Layout } from '@/templates/Layout'
import '@testing-library/jest-dom'

describe('Template/Layout:', () => {
  it('should render with Children', () => {
    render(
      <Layout>
        <h1>Bruno</h1>
      </Layout>
    );
    expect(screen.getByText('Bruno')).toBeTruthy();
  })
})
