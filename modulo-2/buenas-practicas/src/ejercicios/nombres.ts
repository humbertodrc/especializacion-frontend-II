export const superheroes = [
	{name: "Batman", age: 30},
	{name: "Robin", age: 27},
	{name: "Daredevil", age: 40},
	{name: "Wolverine", age: 45},
];

export const moreThanForty = superheroes.filter((hero) => hero.age > 40);

export interface SuperHeroeProps {
  nombre: string;
  edad: number;
}

// dia de hoy - today
export const today = new Date()

// dias transcurridos desde un fecha - elapsed days since a date
export const elapsedDaysSinceADate: number = 33

// primer nombre first name
export const firstName = "Humberto"

// primer apellido - last name
export const lastName = 'Rivero';

// días desde la última modificación - days since modification
export const daysSinceModification = 12;


