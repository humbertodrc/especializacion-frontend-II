// Principio de Sustitución de Liskov (LSP - Liskov Substitution Principle):
// Este principio establece que los objetos de una superclase deben poder ser reemplazados por objetos de una subclase sin afectar la corrección del programa. En TypeScript, esto se relaciona con la herencia.

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

class Pajaro extends Ave {
  volar() {
    console.log("Volando alto");
  }
}

class Pinguino extends Ave {
  volar() {
    console.log("No puede volar, pero nada muy bien");
  }
}
