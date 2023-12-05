import { screen, render, waitForElementToBeRemoved, waitFor } from '@testing-library/react'
import App from '../App'
import { Provider } from 'react-redux'
import store from '../store'

describe('Pruebas en <App />', () => {

  test('No deberia mostar ningun usario', () => {
  
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(screen.queryByText(/Usuario/i)).not.toBeInTheDocument()
    
  })

  test('Deberia mostar el mensaje de Loading', async() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(await screen.findByText(/Loading.../i)).toBeInTheDocument()

  })

  test('Deberiamos ver el nombre del usuario', async() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(await screen.findByText(/Steve Jobs/i)).toBeInTheDocument()

  
  })

  test('Deberiamos ver el correo del usuario', async() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(await screen.findByText(/steve@jobs.com/i)).toBeInTheDocument()
  
  })

  test('No deberia mostar el mensaje de Loading', async() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    // await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i))

    await waitFor(() => expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument(), { timeout: 3000 })

    // expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument()
    // expect(screen.queryByText(/Loading.../i)).toBeNull()
  
  })

})