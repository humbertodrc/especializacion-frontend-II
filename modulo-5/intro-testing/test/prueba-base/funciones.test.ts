import {getTechnologiesByGroup} from "../../src/pruebas-base/funciones";
describe("Pruebas en funciones.ts", () => {
	test("Debe devolver un array de tecnologias por grupo", () => {
		// Arrange
		const esperado = [
			{
				id: 1,
				name: "HTML",
				description: "HyperText Markup Language",
				group: "Frontend",
			},
			{
				id: 2,
				name: "CSS",
				description: "Cascading Style Sheets",
				group: "Frontend",
			},
			{
				id: 3,
				name: "JavaScript",
				description: "JavaScript is a programming language",
				group: "Frontend",
			},
			{
				id: 4,
				name: "React",
				description: "React is a JavaScript library",
				group: "Frontend",
			},
			{
				id: 5,
				name: "Angular",
				description: "Angular is a TypeScript framework",
				group: "Frontend",
			},
		];
		const group = "Frontend";

		// Act
		const resultado = getTechnologiesByGroup(group);

		// Assert
		expect(resultado).toEqual(esperado);
	});

	test("La funcion debe retornar un valor si se llama al menos una vez", () => {
		// Arrange
		const group = "Backend";
		const esperado = [
			{
				id: 6,
				name: "Node",
				description: "Node is a JavaScript runtime",
				group: "Backend",
			},
			{
				id: 7,
				name: "Express",
				description: "Express is a web framework for Node",
				group: "Backend",
			},
		];

		// Act
		const myFunction = jest.fn(getTechnologiesByGroup);
		// console.log(myFunction.mock);
		myFunction(group);
		// console.log(myFunction.mock.calls);
		// console.log(myFunction.mock.calls.length);
		// console.log(myFunction.mock.results);

		// Assert
		expect(myFunction).toHaveBeenCalled();
		expect(myFunction).toHaveBeenCalledTimes(1);
		expect(myFunction).toHaveBeenCalledWith(group);
		expect(myFunction(group)).toEqual(esperado); // opcional ya que estamo probando la funcion
	});
});
