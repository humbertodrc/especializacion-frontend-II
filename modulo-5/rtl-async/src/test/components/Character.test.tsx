import { render, screen, renderHook } from '@testing-library/react';
import Character from '../../components/Character/Character';
import { useApiCharacter } from '../../hooks/useApiCharacter';
import { url } from '../../api/endPoint';

describe('Pruebas en <Character />', () => {
  test('Debe Mostar loading', () => {
    
    render(<Character />)

    const loading = screen.getByText('Loading...')

    expect(loading).toBeInTheDocument()

  })

  test('Debe mostrar un personaje', async () => {
    
    renderHook(() => useApiCharacter(url))

    render(<Character />);

    const imagenes = await screen.findAllByAltText('personaje')

    expect(imagenes).toHaveLength(20)
    expect(imagenes[0]).toHaveAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg')
    expect(imagenes[0]).toBeInTheDocument()

  })

  test('Se debe mostar el nombre del personaje cuando se renderiza el componente', async() => {
  
    renderHook(() => useApiCharacter(url))
  
    render(<Character />)

    const nombre = await screen.findByText(/Rick Sanchez/i)
  
    const nombre2 = await screen.findByText(/Morty Smith/i)

    expect(nombre).toBeInTheDocument()
    expect(nombre2).toBeInTheDocument()
  })

  test('Se debe mostar el status del personaje cuando se renderiza el componente', async () => {
    
    renderHook(() => useApiCharacter(url))
  
    render(<Character />)

    const status = await screen.findAllByText(/Status: Alive/i)
  
    const status2 = await screen.findAllByText(/Status: Dead/i)

    expect(status[0]).toBeInTheDocument()
    expect(status2[0]).toBeInTheDocument()
})
})