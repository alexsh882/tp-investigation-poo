// Ejemplo de Encapsulamiento Javascript

// Clase Persona
class Persona {
    // Propiedades
    constructor(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    // Método
    saludar() {
       console.log(`Hola, soy ${this._nombre}`);
    }
}

// Creo una instancia la clase
const persona = new Persona('Juan');

// Accedo a la propiedad nombre
console.log(persona.nombre);
console.log(persona.saludar());

// Cambio el valor de la propiedad nombre
persona.nombre = 'Pedro';

// Accedo a la propiedad nombre
console.log(persona.nombre);

// Accedo al método saludar
console.log(persona.saludar());

// En este caso, la propiedad nombre es privada y solo se puede acceder a ella a través de los métodos getter y setter. 
// Esto es encapsulamiento en JavaScript.
