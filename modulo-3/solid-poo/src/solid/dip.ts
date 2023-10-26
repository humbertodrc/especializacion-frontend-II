// Principio de Inversión de Dependencia (DIP - Dependency Inversion Principle):
// El DIP establece que las clases de alto nivel no deben depender de las clases de bajo nivel, sino de abstracciones.

// Mal ejemplo: Violando el DIP
// En el mal ejemplo, la clase Interruptor depende directamente de la clase concreta Luz. Esto viola el DIP, ya que las clases de alto nivel (como Interruptor) no deben depender de las clases de bajo nivel. Esto hace que Interruptor sea rígido y no permite una fácil sustitución de la implementación de Luz
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

