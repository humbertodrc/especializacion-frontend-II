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
