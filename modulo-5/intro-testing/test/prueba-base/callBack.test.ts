import { reverseCallBack, reverseString } from '../../src/pruebas-base/callBack';
describe('Pruebas en callbacks.ts', () => {
  test('Debe reversar un string', () => {
    // Arrange
    const str = 'Hola Mundo';

    // Act
    const resultado = reverseCallBack(str, reverseString);

    // Assert
    expect(resultado).toBe('odnuM aloH');
    expect(resultado).not.toBe('Hola Mundo');
    expect(typeof resultado).toBe('string');

  })
})