# frontend-II

## Herencia vs composición

https://es.reactjs.org/docs/composition-vs-inheritance.html

## Documentacion

https://react.dev/reference/react

## Recursos

https://www.patterns.dev/posts

https://refactoring.guru/es/design-patterns

## Pizarra de las clases

https://excalidraw.com/#json=bUb8DAePFQUQV3MdXG06A,5N-YVWHLhPuQLt8krOABDA

### Modulo 1

#### Provider Pattern

##### Referencias:

https://react.dev/reference/react/createContext

https://kentcdodds.com/blog/how-to-use-react-context-effectively

https://www.patterns.dev/posts/provider-pattern

##### Detalle:

El patrón "Provider Pattern" se utiliza para pasar datos o estados a través de la jerarquía de componentes sin necesidad de pasar props manualmente en cada nivel. Esto se logra mediante el uso de un componente de contexto que se puede consumir en cualquier nivel de la jerarquía de componentes.

##### Ejemplo:

```javascript
import React, {createContext, useContext, useState} from "react";

// Creamos un contexto para el estado que queremos compartir
const MyContext = createContext();

// Componente Provider
function MyProvider({children}) {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<MyContext.Provider value={{count, increment}}>
			{children}
		</MyContext.Provider>
	);
}

// Componente Consumidor
function Counter() {
	const {count, increment} = useContext(MyContext);

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={increment}>Incrementar</button>
		</div>
	);
}

// Componente App que utiliza el Provider y el Consumidor
function App() {
	return (
		<MyProvider>
			<div>
				<h1>Aplicación con el Provider Pattern</h1>
				<Counter />
			</div>
		</MyProvider>
	);
}

export default App;
```

#### Render Props

##### Referencias:

https://jeffsegovia.dev/blogs/react-render-prop-pattern

https://blog.logrocket.com/react-render-props-vs-custom-hooks/

https://legacy.reactjs.org/docs/render-props.html

https://dev.to/thesanjeevsharma/advance-react-patterns-render-props-3hjj

https://www.reddit.com/r/reactjs/comments/uhdnpu/example_of_proper_use_of_the_render_props_pattern/

https://www.patterns.dev/posts/render-props-pattern

##### Detalle:

El patrón "Render Props" se utiliza para compartir lógica entre componentes. Esto se logra mediante el uso de una prop especial llamada "render" que recibe una función que retorna un componente.

##### Ejemplo:

```javascript
import React from "react";

// Componente funcional Parent
function Parent() {
	const data = "Datos desde el padre";

	return (
		<div>
			<h2>Componente Parent</h2>
			{/* Utilizamos el componente Child y pasamos una función como prop llamada "render" */}
			<Child render={(data) => <p>{data}</p>} data={data} />
		</div>
	);
}

// Componente funcional Child que utiliza Render Props
function Child(props) {
	// Llamamos a la función "render" pasada como prop desde el componente padre
	return (
		<div>
			<h3>Componente Child</h3>
			{props.render(props.data)}
		</div>
	);
}

export default Parent;
```

#### Higher Order Components

##### Referencias:

https://reactjs.org/docs/higher-order-components.html

https://www.patterns.dev/posts/hoc-pattern

##### Detalle:

El patrón "Higher Order Components" se utiliza para compartir lógica entre componentes. Esto se logra mediante el uso de una función que recibe un componente y retorna otro componente.

##### Ejemplo HOC:

```javascript
import React, {useState} from "react";

// Este es el HOC que agrega la funcionalidad del contador
function withCounter(Component) {
	function WithCounter(props) {
		const [count, setCount] = useState(0);

		const incrementCount = () => {
			setCount(count + 1);
		};

		return (
			<Component count={count} incrementCount={incrementCount} {...props} />
		);
	}

	return WithCounter;
}

// Componente funcional que recibirá la funcionalidad del HOC
function ClickCounter({count, incrementCount}) {
	return (
		<div>
			<button onClick={incrementCount}>Incrementar</button>
			<p>Conteo: {count}</p>
		</div>
	);
}

// Utilizamos el HOC para envolver el componente ClickCounter
const ClickCounterWithHOC = withCounter(ClickCounter);

// Componente principal
function App() {
	return (
		<div>
			<h1>Patrón HOC en React</h1>
			<ClickCounterWithHOC />
		</div>
	);
}

export default App;
```

#### Custom Hooks

##### Referencias:

https://react.dev/learn/reusing-logic-with-custom-hooks

https://reactjs.org/docs/hooks-custom.html

https://alextomas.com/blog/custom-hooks-pattern

https://usehooks.com/

##### Detalle:

El patrón "Custom Hooks" se utiliza para compartir lógica entre componentes. Esto se logra mediante el uso de una función que puede utilizar Hooks y que puede ser utilizada en cualquier componente.

##### Ejemplo Custom Hook:

```javascript
import React, {useState} from "react";

// Creación del Custom Hook
function useCounter(initialCount) {
	const [count, setCount] = useState(initialCount);

	const increment = () => {
		setCount(count + 1);
	};

	return {count, increment};
}

// Componente funcional que utiliza el Custom Hook
function Counter() {
	const {count, increment} = useCounter(0);

	return (
		<div>
			<h1>Contador: {count}</h1>
			<button onClick={increment}>Incrementar</button>
		</div>
	);
}

// Componente principal
function App() {
	return (
		<div>
			<h1>Ejemplo de Custom Hook en React</h1>
			<Counter />
		</div>
	);
}

export default App;
```

#### Compound Components

##### Referencias:

https://kentcdodds.com/blog/compound-components-with-react-hooks

https://www.patterns.dev/posts/compound-pattern

##### Detalle:

El patrón "Compound Components" se utiliza para compartir lógica entre componentes. Esto se logra mediante el uso de un componente padre que envuelve a los componentes hijos y que puede compartir estados y funciones con ellos.

##### Ejemplo Compound Component:

```javascript
import {ReactNode} from "react";

interface CardProps {
	children?: ReactNode;
	src?: string;
	alt?: string;
}

const Card = ({children}: CardProps) => {
	return <article>{children}</article>;
};

const CardBody = ({children}: CardProps) => <div>{children}</div>;

const CardTitle = ({children}: CardProps) => <h2>{children}</h2>;

const CardDescription = ({children}: CardProps) => <p>{children}</p>;

const CardImage = ({src, alt}: CardProps) => <img src={src} alt={alt} />;

const CardStatus = ({children}: CardProps) => <h3>{children}</h3>;

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Image = CardImage;
Card.Status = CardStatus;

export default Card;
```

### Modulo 2

#### Instalacion de Eslint

```bash
npm install eslint --save-dev
```

#### Configuracion de Eslint

```bash
npm init @eslint/config
```

#### Agregar el script al package.json

```json
"lint": "eslint --ext .ts,.tsx src",
"lint:fix": "eslint --fix --ext .ts,.tsx src"
```

### Module 3

##### Referencias:
https://www.linkedin.com/pulse/solid-principles-reactjs-oleksii-bortnytskyi/

https://medium.com/docler-engineering/applying-solid-to-react-ca6d1ff926a4

https://developero.io/blog/react-solid-example

https://konstantinlebedev.com/solid-in-react/


1. **Principio de Responsabilidad Única (SRP - Single Responsibility Principle):**
Este principio establece que una clase debe tener una única razón para cambiar. Debe tener una sola responsabilidad. Aquí tienes un ejemplo en TypeScript:

```tsx
// Mal ejemplo: Violando el SRP
class Usuario {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public guardarUsuario(usuario: Usuario) {
    // Lógica para guardar el usuario en la base de datos
  }
}

// Buen ejemplo: Cumpliendo con el SRP
class Usuario {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre;
  }
}

class UsuarioRepository {
  public guardarUsuario(usuario: Usuario) {
    // Lógica para guardar el usuario en la base de datos
  }
}
```

2. **Principio de Abierto/Cerrado (OCP - Open/Closed Principle):**
El principio OCP establece que las clases deben estar abiertas para la extensión pero cerradas para la modificación. Aquí tienes un ejemplo:

```tsx
// Mal ejemplo: Violando el OCP
class Calculadora {
  public sumar(a: number, b: number): number {
    return a + b;
  }
}

// Extender la funcionalidad
class CalculadoraAvanzada extends Calculadora {
  public restar(a: number, b: number): number {
    return a - b;
  }
}

// Buen ejemplo: Cumpliendo con el OCP
interface Operacion {
  ejecutar(a: number, b: number): number;
}

class Suma implements Operacion {
  ejecutar(a: number, b: number): number {
    return a + b;
  }
}

class Resta implements Operacion {
  ejecutar(a: number, b: number): number {
    return a - b;
  }
}
```

3. **Principio de Sustitución de Liskov (LSP - Liskov Substitution Principle):**
Este principio establece que los objetos de una superclase deben poder ser reemplazados por objetos de una subclase sin afectar la corrección del programa. En TypeScript, esto se relaciona con la herencia. Aquí tienes un ejemplo:

```tsx
// Mal ejemplo: Violando el LSP
class Pajaro {
  volar() {
    console.log("Volando alto");
  }
}

class Pinguino extends Pajaro {
  volar() {
    console.log("Nadando en lugar de volar");
  }
}

// Buen ejemplo: Cumpliendo con el LSP
class Ave {
  volar() {
    console.log("Volando alto");
  }
}

class Pajaro extends Ave {}

class Pinguino extends Ave {
  volar() {
    console.log("No puede volar, pero nada muy bien");
  }
}
```

4. **Principio de Segregación de Interfaces (ISP - Interface Segregation Principle):**
ISP establece que los clientes no deben verse obligados a depender de interfaces que no utilizan. Aquí tienes un ejemplo:

```tsx
// Mal ejemplo: Violando el ISP
interface Trabajo {
  trabajar(): void;
  descansar(): void;
}

class Trabajador implements Trabajo {
  trabajar() {
    // Implementación
  }
  descansar() {
    // Implementación
  }
}

// Buen ejemplo: Cumpliendo con el ISP
interface Trabajo {
  trabajar(): void;
}

interface Descanso {
  descansar(): void;
}

class Trabajador implements Trabajo, Descanso {
  trabajar() {
    // Implementación
  }
  descansar() {
    // Implementación
  }
}
```

5. **Principio de Inversión de Dependencia (DIP - Dependency Inversion Principle):**
El DIP establece que las clases de alto nivel no deben depender de las clases de bajo nivel, sino de abstracciones. Aquí tienes un ejemplo:

```tsx
// Mal ejemplo: Violando el DIP
class Luz {
  encender() {
    // Implementación de encendido
  }
}

class Interruptor {
  private luz: Luz;

  constructor() {
    this.luz = new Luz();
  }

  encenderLuz() {
    this.luz.encender();
  }
}

// Buen ejemplo: Cumpliendo con el DIP
interface Dispositivo {
  encender(): void;
}

class Luz implements Dispositivo {
  encender() {
    // Implementación de encendido
  }
}

class Interruptor {
  private dispositivo: Dispositivo;

  constructor(dispositivo: Dispositivo) {
    this.dispositivo = dispositivo;
  }

  encenderDispositivo() {
    this.dispositivo.encender();
  }
}
```

### Modulo 4

Hay varias formas de escribir CSS en JavaScript (CSS-in-JS), desde las más básicas hasta las más avanzadas. Aquí te proporcionaré ejemplos de diferentes enfoques:

1. **Estilos en línea (Inline Styles):**

   - Este es el método más básico y directo para agregar estilos en React.
   - No se utiliza una librería específica, simplemente se definen los estilos como objetos en línea.

```jsx
const elementStyle = {
	color: "blue",
	fontSize: "16px",
};

function MyComponent() {
	return <div style={elementStyle}>Hola Mundo</div>;
}
```

2. **CSS Modules:**

   - Permite escribir estilos CSS en archivos separados y luego importarlos en los componentes.
   - Los estilos son localmente scoped por defecto.

```jsx
import styles from "./MiComponente.module.css";

function MyComponent() {
return <div className={styles.myClass}>Hola Mundo</div>;
}
```

3. **JSS (JavaScript Style Sheets):**

   - Utiliza JSS para definir estilos en JavaScript.
   - Proporciona un enfoque programático para definir estilos.

```jsx
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
myClass: {
  color: "blue",
  fontSize: "16px",
},
});

function MyComponent() {
const classes = useStyles();
return <div className={classes.myClass}>Hola Mundo</div>;
}
```

4. **Styled Components:**

   - Utiliza una librería como **`styled-components`** para escribir estilos CSS en JavaScript.
   - Permite definir estilos de componentes de manera más legible y mantenible.

```jsx
import styled from "styled-components";

const StyledDiv = styled.div`
color: blue;
font-size: 16px;
`;

function MyComponent() {
return <StyledDiv>Hola Mundo</StyledDiv>;
}
```

5. **Emotion:**

   - Otra librería de CSS-in-JS como Emotion que permite estilos en JavaScript.
   - Similar a **`styled-components`**, pero con algunas diferencias en la sintaxis.

```jsx
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const elementStyle = css`
color: blue;
font-size: 16px;
`;

function MyComponent() {
return <div css={elementStyle}>Hola Mundo</div>;
}
```

