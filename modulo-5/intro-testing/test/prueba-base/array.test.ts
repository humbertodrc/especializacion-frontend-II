import { getTechnologies } from '../../src/pruebas-base/array';
describe('Pruebas en array.ts', () => {
  test('Debe retornar un array de string', () => {
    // Arrange
    const data = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular']

    // Act
    const resultado = getTechnologies()

    // Assert
    expect(resultado).toEqual(data)
    expect(resultado.length).toBe(5)
    expect(resultado).toContain('React')
  })
})