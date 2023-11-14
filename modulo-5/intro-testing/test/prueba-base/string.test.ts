import { getSaludo } from '../../src/pruebas-base/string';
describe('Pruebas en string.ts', () => {
  test('Debe retornar un string', () => {

    // Arrange
    const nombre = 'Humberto'

    // Act
    const saludo = getSaludo(nombre)

    // Assert
    expect(saludo).toBe('Hola Humberto')
    expect(typeof saludo).toBe('string')
    expect(saludo).toHaveLength(13)

  })
})