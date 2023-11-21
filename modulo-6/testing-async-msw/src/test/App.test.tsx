import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {

  test('renders App component', () => {
    render(<App />)

    const heading = screen.getByText(/Testing/i)
    const input = screen.getByPlaceholderText(/Search.../i)
    const button = screen.getByRole('button', { name: /Search/i })

    expect(heading).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('renders character from Api by default', async() => {
    render(<App />)

    await waitFor(() => screen.findByText(/Rick/i))
    await waitFor(() => screen.findByText(/Morty/i))
    
  })

  test('Search Character', async() => {
    render(<App />)

    const input = screen.getByPlaceholderText(/Search.../i)
    fireEvent.change(input, { target: { value: 'Rick' } })

    const button = screen.getByRole('button', { name: /Search/i })
    fireEvent.click(button)

    await waitFor(() => screen.findByText(/Usario Test/i))
  })
  
  test('If input is empty, show all characters', async () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /Search/i })
    fireEvent.click(button)

    await waitFor(() => screen.findByText(/Rick/i))
  })
})