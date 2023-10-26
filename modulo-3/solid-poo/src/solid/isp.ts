// Principio de Segregación de Interfaces (ISP - Interface Segregation Principle):
// ISP establece que los clientes no deben verse obligados a depender de interfaces que no utilizan.

// Mal ejemplo: Violando el ISP
// En el mal ejemplo, tenemos una interfaz llamada Trabajo que contiene dos métodos, trabajar y descansar. Luego, tenemos una clase Trabajador que implementa esta interfaz. La violación del ISP ocurre porque no todos los tipos de trabajadores necesitan ambos métodos. Por ejemplo, un trabajador de tiempo completo puede necesitar ambos, pero un trabajador por horas puede no necesitar la función de "descansar".
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

// Correcta implementación del ISP
interface Trabajo {
  trabajar(): void;
}

interface Descanso {
  descansar(): void;
}

class Trabajador2 implements Trabajo, Descanso {
  trabajar() {
    // Implementación
  }
  descansar() {
    // Implementación
  }
}

// En el mal ejemplo, tenemos una interfaz llamada Trabajo que contiene dos métodos, trabajar y descansar. Luego, tenemos una clase Trabajador que implementa esta interfaz. La violación del ISP ocurre porque no todos los tipos de trabajadores necesitan ambos métodos. Por ejemplo, un trabajador de tiempo completo puede necesitar ambos, pero un trabajador por horas puede no necesitar la función de "descansar".