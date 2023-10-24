// Principio de Abierto/Cerrado (OCP - Open/Closed Principle):
// El principio OCP establece que las clases deben estar abiertas para la extensión pero cerradas para la modificación.

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

// Uso correcto del OCP
interface Operacion {
  ejecutar(a:number, b:number): number;
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

const suma = new Suma();
const resta = new Resta();

console.log(suma.ejecutar(1, 2));
console.log(resta.ejecutar(10, 2));
