import { renderHook, waitFor } from '@testing-library/react';
import { useApiCharacter } from '../../hooks/useApiCharacter';
import { url } from '../../api/endPoint';

// mswSetup.js
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('h', (req, res, ctx) => {
    return res(ctx.status(500));  // Simula un error interno del servidor
  })
);


describe('Pruebas en UseApiCharacter', () => {

  test('El estado inicial debe ser characters vacio, loading true, y error false', () => {
    // Act
    const { result } = renderHook(() => useApiCharacter(url))

    // Assert
    expect(result.current.character).toEqual([])
    expect(result.current.isLoading).toBeTruthy()
    expect(result.current.error).toBeFalsy()
  })

  test('Debe retornar personajes, loading false, y error false', async () => {
    // Act
    const { result } = renderHook(() => useApiCharacter(url))

    // Assert
    await waitFor(() => expect(result.current.character).toHaveLength(20))
    await waitFor(() => expect(result.current.isLoading).toBeFalsy())
    await waitFor(() => expect(result.current.error).toBeFalsy())
  
  })

  test('Debe retornar error true en caso de que falle la peticion, loading false, y characters vacio', async () => {

    server.listen();


    // Act
    const { result } = renderHook(() => useApiCharacter('h'))

    // Assert
    await waitFor(() => expect(result.current.character).toEqual([]))
    await waitFor(() => expect(result.current.isLoading).toBeFalsy())
    await waitFor(() => expect(result.current.error).toBeTruthy())

    server.close();
  
  })
})