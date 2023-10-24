// Principio de Segregación de Interfaces (ISP - Interface Segregation Principle):
// ISP establece que los clientes no deben verse obligados a depender de interfaces que no utilizan.

// Mal ejemplo: Violando el ISP
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


