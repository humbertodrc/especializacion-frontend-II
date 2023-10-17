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
import React, { createContext, useContext, useState } from 'react';

// Creamos un contexto para el estado que queremos compartir
const MyContext = createContext();

// Componente Provider
function MyProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider value={{ count, increment }}>
      {children}
    </MyContext.Provider>
  );
}

// Componente Consumidor
function Counter() {
  const { count, increment } = useContext(MyContext);

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
import React from 'react';

// Componente funcional Parent
function Parent() {
  const data = 'Datos desde el padre';

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
import React, { useState } from 'react';

// Este es el HOC que agrega la funcionalidad del contador
function withCounter(Component) {
  function WithCounter(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return <Component count={count} incrementCount={incrementCount} {...props} />;
  }

  return WithCounter;
}

// Componente funcional que recibirá la funcionalidad del HOC
function ClickCounter({ count, incrementCount }) {
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
import React, { useState } from 'react';

// Creación del Custom Hook
function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}

// Componente funcional que utiliza el Custom Hook
function Counter() {
  const { count, increment } = useCounter(0);

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
import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
}

const Card = ({ children }: CardProps) => {
  return (
    <article>
      {children}
    </article>
  );
};

const CardBody = ({ children }: CardProps) => <div>{children}</div>;

const CardTitle = ({ children }: CardProps) => <h2>{children}</h2>;

const CardDescription = ({ children }: CardProps) => <p>{children}</p>;

const CardImage = ({ src, alt }: CardProps) => <img src={src} alt={alt} />;

const CardStatus = ({ children }: CardProps) => <h3>{children}</h3>;

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
