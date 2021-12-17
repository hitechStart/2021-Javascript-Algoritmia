var persona = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322",
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    persona(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    
}}


console.log(typeof persona);
var simbolo = Symbol(persona);
console.log(typeof simbolo);
console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona.nombre.length);

let name = persona.nombre;
let denominacion = 'N/C';

switch( name ){
    case 'Juan': case '2': case 12:
        denominacion = 'Juan';
        break;
    case 3: case 4: case 5:
        denominacion = 'Carlos';
        break;
    case 6: case 7: case 8:
        denominacion = 'Pepe';
        break;
    case 9: case 10: case 11:
        denominacion = 'Sara';
        break;
    default:
        denominacion = 'Valor incorrecto';                
}
console.log(denominacion);

/*Impresion de un objeto:*/

for( nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad]);
}

let personaArray = Object.values( persona );
console.log( personaArray );

let personaString = JSON.stringify( persona );
console.log( personaString );

/*
Creacion de otro Objeto persona:
*/

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';
console.log(persona2.tel);

/*Set y Get*/
persona.lang = 'en';//se llama metodo set lang

console.log( persona.lang );//se llama metodo get lang
console.log( persona.idioma );



