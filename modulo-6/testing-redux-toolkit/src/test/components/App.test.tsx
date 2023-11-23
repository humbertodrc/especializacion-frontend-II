import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../store';

describe('Pruebas en <App />', () => {
  test('No deberia mostrar ningun elemento del usuario', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect( screen.queryByText("Usuario")).not.toBeInTheDocument();
  })

  test('Deberia mostrar el mensaje de cargando', async() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect( await screen.findByText("Loading...")).toBeInTheDocument();
  
  })

  test('Ver el nombre del usuario', async() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(await screen.findByText("Steve Jobs")).toBeInTheDocument();
  
  })

  test('Ver el nombre del email', async() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(await screen.findByText("steve@jobs.com")).toBeInTheDocument();
  
  })

  test("No deberia mostrar ningun mensaje de cargando", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Loading...")).toBeNull(); 
  })

})