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

