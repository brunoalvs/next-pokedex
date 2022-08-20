import { render, screen } from '@testing-library/react';
import Home from '@/pages/index'

import '@testing-library/jest-dom'

describe('HomePage:', () => {
  it('should render correctly', () => {
    render(<Home />)

    const h1 = screen.getByText('Hello Next.js')
    expect(h1).toBeInTheDocument();
  })
})
