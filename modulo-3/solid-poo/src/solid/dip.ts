// Principio de Inversión de Dependencia (DIP - Dependency Inversion Principle):
// El DIP establece que las clases de alto nivel no deben depender de las clases de bajo nivel, sino de abstracciones.

// Mal ejemplo: Violando el DIP
// En el mal ejemplo, la clase Interruptor depende directamente de la clase concreta Luz. Esto viola el DIP, ya que las clases de alto nivel (como Interruptor) no deben depender de las clases de bajo nivel. Esto hace que Interruptor sea rígido y no permite una fácil sustitución de la implementación de Luz.
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

interface Dispositivo {
  encender(): void;
}

class Luz2 implements Dispositivo{
  encender(): void {
    // Implementación de encendido
  }
}

class Interruptor2 {
  private dispositivo: Dispositivo;

  constructor(dispositivo: Dispositivo) {
    this.dispositivo = dispositivo;
  }

  encenderDispositivo() {
    this.dispositivo.encender();
  }
}

// En la correcta implementación del DIP, hemos introducido una interfaz Dispositivo que define un método encender. La clase Luz2 implementa esta interfaz. Ahora, la clase Interruptor2 depende de la abstracción Dispositivo en lugar de la clase concreta Luz. Esto cumple con el DIP, ya que las clases de alto nivel dependen de abstracciones, lo que hace que el código sea más flexible y permite la sustitución de diferentes implementaciones de dispositivos (como una bombilla, un ventilador, etc.) sin modificar el Interruptor2.