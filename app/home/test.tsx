import { render, screen } from '@testing-library/react'
import Home from './page'

test('renders hello world', () => {
  render(<Home />)
  expect(screen.getByText('Hello World!')).toBeInTheDocument()
})

function fetchData() {
	throw new Error('Function not implemented.')
}
