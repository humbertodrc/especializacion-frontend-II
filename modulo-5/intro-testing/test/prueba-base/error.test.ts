import { createUser } from '../../src/pruebas-base/error';
describe('Pruebas en error.ts', () => {

  test('Debe retornar un Usuario', () => {
    const user = {
      uid: 'ABC123',
      name: 'Humberto'
    }

    const userTest = createUser(user);
    expect(userTest).toEqual(user);
    expect(userTest).toBeInstanceOf(Object);
    expect(userTest).toHaveProperty('uid');
    expect(userTest).toHaveProperty('name');
    expect(userTest).toHaveProperty('uid', 'ABC123');
    expect(userTest).toHaveProperty('name', 'Humberto');
    expect(userTest).toMatchObject(user);
  })

  test('Debe retornar un mensaje de error', () => {
    expect(() => createUser({
      uid: 'ABC123',
      name: ''
    })).toThrowError();
    
  })
})