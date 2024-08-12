// Ejemplo de herencia en JavaScript

// Definimos la clase Persona
class Persona {
    // Constructor de la clase Persona que recibe el nombre y la edad
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método saludar de la clase Persona
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

// Definimos la clase Estudiante que hereda de Persona

class Estudiante extends Persona {
    // Constructor de la clase Estudiante que recibe el nombre, la edad y el curso
    constructor(nombre, edad, curso) {
        // Llamamos al constructor de la clase padre (Persona) con super y le pasamos el nombre y la edad
        super(nombre, edad);
        // Agregamos la propiedad curso a la clase Estudiante
        this.curso = curso;
    }

    // Método estudiar de la clase Estudiante
    estudiar() {
        console.log(`Mi nombre es ${this.nombre} y estudio la materia ${this.curso}`);
    }
}

// Creamos un objeto de la clase Estudiante
const estudiante = new Estudiante('Alejandro', 34, 'TLP 4 ');
estudiante.saludar();
estudiante.estudiar();


// En este ejemplo, la clase Estudiante hereda de la clase Persona.
// La clase Estudiante tiene acceso a los métodos de la clase Persona, como saludar().
// La clase Estudiante también puede tener sus propios métodos y propiedades, como estudiar().
// Para llamar al constructor de la clase padre, usamos super(nombre, edad) en el constructor de la clase hija.
// Podemos acceder a las propiedades y métodos de la clase padre usando this en la clase hija.
// La herencia en JavaScript se logra mediante la palabra clave extends.