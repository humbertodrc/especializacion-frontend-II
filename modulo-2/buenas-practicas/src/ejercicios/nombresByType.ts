// arreglo de porcerntajes de notas - array of percentages of grades
export const arrayOfNums = [8.5, 6.6, 7.8, 9.9, 10, 5.5, 4.4, 3.3, 2.2, 1.1];

// Listado de estudiantes
const people = [
	{id: 1, email: "sara@google.com"},
	{id: 2, email: "florencia@google.com"},
	{id: 3, email: "gabriela@google.com"},
	{id: 4, email: "guido@google.com"},
];

// Listado de emails de los usuarios
export const emails = people.map((u) => u.email);

// Variables booleanas de un video juego
export const jump = false;
export const run = true;
export const noTieneItems = true;
export const loading = false;
export const login = false;

// Tiempo de carga de un video juego
const start = new Date().getTime();
// Tiempo de carga de un video juego
export const end = new Date().getTime() - start;

// Funciones
// Obtiene las notas de un estudiante
export function note() {
	throw new Error("Function not implemented.");
}

// obtiene las materias de una url
export function subjectsUrl(u: string) {
	throw new Error("Function not implemented.");
}

// obtiene el área de un cuadrado basado en sus lados
export function areaCuadrado(s: number) {
	throw new Error("Function not implemented.");
}

// imprime las notas de un estudiante
export function printNoteIfStudenActive() {
	throw new Error("Function not implemented.");
}
