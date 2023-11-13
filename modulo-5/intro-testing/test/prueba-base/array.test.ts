import { getTechnologies } from '../../src/pruebas-base/array';
describe('Pruebas en el archivo array.ts', () => {
  test('Debe retornar un array de strings', () => {

    const technologies2 = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'];

    const technologies = getTechnologies();

    expect(technologies).toEqual(technologies2);
    expect(technologies).toBeInstanceOf(Array);
    expect(technologies).toHaveLength(5);
    expect(technologies).toEqual(expect.arrayContaining(['HTML', 'CSS', 'JavaScript', 'React', 'Angular']));
    expect(technologies).toContain('HTML');
  })
})