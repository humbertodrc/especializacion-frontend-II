export const sh = [
	{name: "Batman", age: 30},
	{name: "Robin", age: 27},
	{name: "Daredevil", age: 40},
	{name: "Wolverine", age: 45},
];

export const mayorCuarenta = sh.filter((h) => h.age > 40);

export interface SuperHeroeInterface {
  nombre: string;
  edad: number;
}

// dia de hoy - today
export const ddmmyyyy = new Date()

// dias transcurridos desde un fecha - elapsed days since a date
export const d: number = 33

// primer nombre first name
export const nombre = "Humberto"

// primer apellido - last name
export const apellido = 'Rivero';

// días desde la última modificación - days since modification
export const dsm = 12;


