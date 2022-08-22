import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '@/pages/index'

import '@testing-library/jest-dom'
import mockData from 'src/tests/mock/listPokemons.json'

describe('HomePage:', () => {
  it('should render correctly', () => {
    render(<Home pokemons={mockData} />)

    const h1 = screen.getByText('Hello Next.js')
    expect(h1).toBeInTheDocument();
  })

  it('renders the features page unchanged', () => {
    const tree = renderer.create(<Home pokemons={mockData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
