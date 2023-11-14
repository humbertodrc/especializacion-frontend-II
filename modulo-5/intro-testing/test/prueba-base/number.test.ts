import { suma } from '../../src/pruebas-base/number';
describe('Pruebas en number.ts', () => {
  test('Debe retornar la suma de dos numero', () => {
    // Arrange
    const numero1 = 10
    const numero2 = 15
    
    // Act
    const resultado = suma(numero1, numero2)

    // Assert
    expect(resultado).toBe(25)
  })
})