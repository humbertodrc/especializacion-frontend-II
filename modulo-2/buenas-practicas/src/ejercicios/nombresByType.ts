// arreglo de porcerntajes de notas - array of percentages of grades
export const arrayOfFloats = [8.5, 6.6, 7.8, 9.9, 10, 5.5, 4.4, 3.3, 2.2, 1.1];

// Listado de estudiantes
const studentsList = [
	{id: 1, email: "sara@google.com"},
	{id: 2, email: "florencia@google.com"},
	{id: 3, email: "gabriela@google.com"},
	{id: 4, email: "guido@google.com"},
];

// Listado de emails de los usuarios
export const emails = studentsList.map((student) => student.email);

// Variables booleanas de un video juego
export const canJump = false;
export const canRun = true;
export const hasItems = true;
export const isLoading = false;
export const isLogin = false;

// Tiempo de carga de un video juego
const startToLoad = new Date().getTime();
// Tiempo de carga de un video juego
export const endToLoad = new Date().getTime() - startToLoad;

// Funciones
// Obtiene las notas de un estudiante
export function getNoteForStudent() {
	throw new Error("Function not implemented.");
}

// obtiene las materias de una url
export function getSubjectsUrl(u: string) {
	throw new Error("Function not implemented.");
}

// obtiene el área de un cuadrado basado en sus lados
export function getSquareArea(s: number) {
	throw new Error("Function not implemented.");
}

// imprime las notas de un estudiante
export function printNoteStuden() {
	throw new Error("Function not implemented.");
}
