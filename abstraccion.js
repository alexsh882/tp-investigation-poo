// Ejemplo de abstracción en JavaScript

// Definimos la clase Persona con un método saludar y un método despedirse

class Persona {
    // Constructor de la clase Persona que recibe el nombre
    constructor(nombre, edad = 0, profession) {
        this.nombre = nombre;
        this.edad = edad;
        this.profession = profession;
    }

    // Método saludar de la clase Persona
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. Soy ${this.profession}`);
    }

    // Método despedirse de la clase Persona
    despedirse() {
        console.log(`Adiós, nos vemos pronto`);
    }
}

const persona = new Persona('Alejandro', 34, 'Desarrollador');

persona.saludar();
persona.despedirse();

// En este ejemplo, la clase Persona tiene dos métodos: saludar() y despedirse().
// La abstracción en JavaScript se logra definiendo clases con métodos y propiedades 
// que representan un concepto o entidad en este caso, una persona.
