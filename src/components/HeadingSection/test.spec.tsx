import { HeadingSection } from '@/components/HeadingSection'
import { render, screen } from '@testing-library/react'

describe('components/HeadingSection:', () => {
  it('should renders the children property', () => {
    const children = 'HeadingSection'
    render(<HeadingSection>{children}</HeadingSection>)

    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
