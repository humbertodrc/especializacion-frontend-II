// Principio de Sustitución de Liskov (LSP - Liskov Substitution Principle):
// Este principio establece que los objetos de una superclase deben poder ser reemplazados por objetos de una subclase sin afectar la corrección del programa. En TypeScript, esto se relaciona con la herencia.

// Mal ejemplo: Violando el LSP
class Pajaro {

  comer() {
    console.log("Comiendo");
  }

  volar() {
    console.log("Volando alto");
  }
}

class Pinguino extends Pajaro {
  volar() {
    throw new Error("No puede volar");
  }
}

// Implementación correcta del LSP
class Ave {
  comer() {
    console.log("Comiendo");
  }
}

class AveVoladora extends Ave {
  volar() {
    console.log("Volando alto");
  }
}

class Aguila extends AveVoladora {}

class Pinguino2 extends Ave {}

const aguila = new Aguila();
const pinguino = new Pinguino2();

aguila.volar();
aguila.comer();
pinguino.comer();


// La clase Pinguino2 hereda de Ave, y aunque define el método comer(), no define el método volar(). Esto no sigue el principio de Liskov, ya que Ave tiene un método volar().

// En Pinguino2, aunque defines el método comer(), no estás arrojando un error como en el caso de Pinguino, lo que significa que el comportamiento no es consistente con la clase base Ave.

// La clase Aguila y AveVoladora parecen seguir el principio de Liskov correctamente, ya que no introducen nuevos comportamientos ni arrojan excepciones inesperadas en los métodos heredados.
