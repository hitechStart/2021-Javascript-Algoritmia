class Persona {
  constructor() {}
  cosntructor(nombre, apellido) {
    this.nombre;
    this.apellido;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
}

let persona1 = new Persona();
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);


