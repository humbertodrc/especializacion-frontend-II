import { reverseCallBack, reverseString } from '../../src/pruebas-base/callBack';
describe('Pruebas en callBack', () => {

  const palabra = 'Hola Mundo'

  test('Debe llamar a una funcion que hace un reverse de un string', () => {
    const palabraReverse = reverseCallBack(palabra, reverseString)
    expect(palabraReverse).toBe('odnuM aloH')
    expect(typeof palabraReverse).toBe('string')
    expect(palabraReverse.length).toBe(10)
    expect(palabraReverse).not.toBe('Hola Mundo')
    expect(palabraReverse).not.toBe(palabra)
    expect(palabraReverse).not.toEqual(palabra)
    // expect(palabraReverse).not.toEqual('odnuM aloH')
  })
})