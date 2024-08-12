// Ejemplo Polimorfismo en JavaScript

// Definimos una clase padre
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    sonido() {
        return 'Hace sonido';
    }

    comer() {
        return 'Come';
    }
}

// Definimos una clase hija

class Perro extends Animal {
    sonido() {
        return 'Ladra';
    }

    comer() {
        return 'Come carne';
    }
}

// Definimos una clase hija

class Gato extends Animal {
    sonido() {
        return 'Maulla';
    }

    comer() {
        return 'Come pescado';
    }
}

// Creo una instancia de la clase Perro
const perro = new Perro('Toby');
console.log(perro.sonido());
console.log(perro.comer());

// Creo una instancia de la clase Gato
const gato = new Gato('Tom');
console.log(gato.sonido());
console.log(gato.comer());

// En este caso, la clase Animal es la clase padre y las clases Perro y Gato son las clases hijas.
// Las clases hijas sobrescriben los métodos de la clase padre, pero mantienen la misma firma.
// Esto es polimorfismo en JavaScript.