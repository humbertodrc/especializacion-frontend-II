// función para obtener información de un superHeroe por Id
export function getSuperHeroById( superHeroId: string ) {
  console.log({ superHeroId });
}

// función para obtener los villanos de una película expecifica
export function getAllVilliansForMovieId( id: string ) {
  console.log({ id });
}

// funcion para obtener el bio del Hero por el id
export function getHeroBioById( heroId: string ) {
  console.log({ heroId });
}

// Crear un super heroe
export function createHero(name: string, power: string, rating: number, age: number) {
  console.log({ name, power, rating, age });
}

// Crea un nueva cuartel para los villanos
export function createBarracks( name: string, address: string ): boolean {
  
  // tarea asincrona para verificar nombre
  // ..
  // ..
  if ( name === 'Cloacas de Gotham' ) return false;

  console.log('Crear cuartel', { name, address });
  return true;        

}