// Principio de Inversión de Dependencia (DIP - Dependency Inversion Principle):
// El DIP establece que las clases de alto nivel no deben depender de las clases de bajo nivel, sino de abstracciones.

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