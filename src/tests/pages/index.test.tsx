import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Home from '@/pages/index'

import '@testing-library/jest-dom'
import mockData from 'src/tests/mock/listPokemons.json'

describe('HomePage:', () => {
  it('should render correctly', () => {
    render(<Home pokemons={mockData} />)

    const testId = screen.getByTestId('homepage')
    expect(testId).toBeTruthy()
  })

  it('renders the features page unchanged', () => {
    const tree = renderer.create(<Home pokemons={mockData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the pokemons list', () => {
    render(<Home pokemons={mockData} />)

    mockData.forEach((item) => {
      const element = screen.getByTestId(`pokecard-${item.id}`)
      expect(element).toBeTruthy()
    })
  })
})
