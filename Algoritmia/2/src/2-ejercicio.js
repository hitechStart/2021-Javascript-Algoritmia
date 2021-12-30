//Para instalar JSDocs usar: npm install --save-dev jsdoc
//Para generar la documentacion es necesario crear y configurar ./src, jsdoc.json y package.json
//mente ejecutar npm run docs
/**
 *  @file Archivo que realiza las operaciones para mostrar y verificar los datos.
 * @author Maximiliano Di Ludovico <mdlprofesional@gmail.com>
 * @copyright Maximiliano Di Ludovico 2021
 * @version 1.0.0
 */
//@ts - check

/***********************Declaracion de funciones*********************/
/**
 * Funcion que imprime el archivo que contiene el paquete recibido. la Norma empleada es la IEEE 802.3 Ethernet
 * @param {Object} obj Objeto que contiene todos los valores y claves contenidos en el paquete Json. El paquete esta compuesto por una 
 * cabecera y una seccion de datos. 
 * @returns {void}
 */
function imprimirJson(obj) {

    for (var key in obj) {
        var value = obj[key];
        console.log(key + ": " + value);
    }

    var pay = datos.trama[1].payload;
    for (var car of pay) {
        var value = car;
        for (var key in value) {
            var value = value[key];
            console.log(key + ": " + value);
        }
    }
}
/**Funcion que inserta los elementos contenidos en el archivo Json a una instancia de la clase Trama.
 * @param {Object} trama instancia de la clase Trama ue va a contener las claves y valores del objeto Json.
 * @param {Object} obj Objeto que contiene todos los valores y claves contenidos en el paquete Json. El apquete esta compuesto por una 
 * cabecera y una seccion de datos. 
 * @returns {Object} trama instancia de la clase Trama que va a contener las claves y valores del objeto Json.
 */
function insercion(trama, obj) {

    trama.preambulo = obj.preambulo;
    trama.delimitador = obj.delimitador;
    trama.origen = obj.origen;
    trama.destino = obj.destino;
    trama.etiqueta = obj.etiqueta;
    trama.longitud = obj.longitud;
    trama.crc = obj.crc;
    trama.gap = obj.gap;
    trama.payload = pay;

    return trama;
}
/**
 * Funcion perteneciente a el metodo longitudDeTrama. Verifica que los valores x se hallen dentro de un rango especifico min y max.
 * @param {Number} x Representa la sumaBytesTotal de la trama.
 * @param {Number} min Representa el minimo de 84 Bytes para la trama ethernet 802.3
 * @param {Number} max Representa el maximo de 1542 Bytes para la trama ethernet 802.3
 * @returns {void}
 */
function between(x, min, max) {
    return x >= min && x <= max;
}
/**
 * Funcion que verifica la longitud de la trama ethernet (entre 64 y 1542 bytes).
 * @param {Number} sumaBytesCabecera Cuenta la cantidad de datos que se hallen en la cabecera
 * @param {Number} sumaBytesDatos  Cuenta la cantidad de datos que se hallen en la seccion de datos
 * @param {Number} sumaBytesTotal Contiene la suma de sumaBytesCabecera + sumaBytesDatos
 * @returns {void}
 */
function longitudDeTrama(sumaBytesCabecera, sumaBytesDatos, sumaBytesTotal) {
    for (var key in obj) {
        sumaBytesCabecera += (obj[key]).length;
    }
    console.log('Cabecera contiene :' + sumaBytesCabecera);

    for (var car of pay) {
        var value = car;
        for (var key in value) {
            sumaBytesDatos += (value[key]).length;
        }

    }
    console.log('Trama contiene :' + sumaBytesDatos);

    sumaBytesTotal = sumaBytesCabecera + sumaBytesDatos;

    if (!between(sumaBytesTotal, 84, 1542)) {
        console.log('Trama contiene :' +
            sumaBytes + ' error. Se esperaba un valor entre 84 y 1542 bytes.');
        throw ("Stop script");
    }
}
/**
 * Funcion que verifica si los datos de cada campo, se hallan en formato hexadecimal.
 * @param {Object} obj  Objeto que contiene todos los valores y claves contenidos en el paquete Json. El apquete esta compuesto por una 
 * cabecera y una seccion de datos. 
 */
function verificarHexadecimal(obj) {

    for (var key in obj) {
        var hexadecimal = /^[0-9A-F]+$/ig.test(obj[key]);

        if (key != '_payload' && !hexadecimal) {
            console.log(key + ": " + hexadecimal + ' contiene error. Se esperaba un valor hexadecimal');
            throw ("Stop script");
        }
    }
    console.log('Verificacion de numeros en Hexadecimal confirmada.');
}
/**
 * Funcion que convierte de hexadecimal a binario los datos de la cabecera y de la seccion de payload
 * @param {Object} obj  Objeto que contiene todos los valores y claves contenidos en el paquete Json. El apquete esta compuesto por una 
 * cabecera y una seccion de datos. 
 * @param {Array} pay Objeto que contiene la secion de datos perteneciente al archivo Json.
 * @returns {void}
 */
function convertirABinario(obj, pay) {
    //convertir a binario Cabecera
    for (var key in obj) {
        var binario = (parseInt(obj[key], 16).toString(2)).padStart(8, '0');

        if (key != '_payload')
            console.log(key + ": " + binario);
    }

    //convertir a binario Datos
    for (var car of pay) {
        var value = car;
        for (var key in value) {
            binario = (parseInt(value[key], 16).toString(2)).padStart(8, '0');
            console.log(key + ": " + binario);
        }
    }
}
/**
 * Funcion que realiza la operacion binaria XOR. Pertenece al metodo calculoDeCrc.
 * @param {String} s Contiene la cadena binaria de la seccion de datos mas los bits determinados por el CRC
 * @returns {String} Devuele el resultado de la operacion XOR para hallar el CRC
 */
//Aplicamos XOR con un G=1100
function binary_encode(s) {
    s = unescape(encodeURIComponent(s));
    var chr, i = 0,
        l = s.length,
        out = '';
    for (; i < l; i++) {
        chr = s.charCodeAt(i).toString(2);
        while (chr.length % 8 != 0) { chr = '0' + chr; }
        out += chr;
    }
    return out;
}
/**
 * Funcion que calcula el CRC
 * @param {Object} trama instancia de la clase Trama ue va a contener las claves y valores del objeto Json.
 * @param {Array} pay Objeto que contiene la secion de datos perteneciente al archivo Json.
 * @param {String} hamming String que contiene una cadena de digitos binarios formando el CRC.
 * @returns {String} Devuelve  una cadena de digitos binarios formando el CRC.
 */
function calculoDeCrc(trama, pay, hamming) {
    var concatenarDatos = "";
    var LongitudCRC = 0;

    for (var car of pay) {
        var value = car;
        for (var key in value) {
            binario = (parseInt(value[key], 16).toString(2)).padStart(8, '0');

            concatenarDatos += binario;
        }

        hamming = concatenarDatos;

    }
    LongitudCRC = (trama.crc).length * 8;

    for (var i = 0; i < LongitudCRC; i++) {
        concatenarDatos += '0';
    }
    var resultado = binary_encode(concatenarDatos) ^ binary_encode('1100');

    console.log('CRC es ' + resultado);
    return hamming;
}
/**
 * Funcion que calcula la cantidad de bits de paridad que se necesitan. La paridad se considera par.
 * @param {Number} bitsDeParidad Es el numero d bits de paridad que se necesitan verificar la recepcion de la trama
 * @param {String} hamming Contiene una cadena de digitos binarios formando el CRC.
 * @returns {Number} Devuelve la cantidad de bits de paridad que se deben agregar a la trama de datos.(paridad + datos)
 */
function cantidadBitDeParidad(bitsDeParidad, hamming) {

    for (var i = 0; i < hamming.length; i++) {
        if ((Math.pow(2, i)) < hamming.length) {
            bitsDeParidad++;
        } else {
            break;
        }
    }
    console.log('Cantidad de bits de paridad es: ' + bitsDeParidad);
    return bitsDeParidad;
}
/**
 * Funcion que convierte un numero recibido como parametro a una cadena binaria. Funcion que pertenece al metodo palabraMasParidad.
 * @param {Number} number Es un numero natural. 
 * @returns {String} Devuelve una cadena de numeros binarios.
 */

function convertToBinary(number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1;) {
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
    }
    return binary;
}
/** Funcion que devuelve la cantidad de ocurrencia iguales a 1. Forma parte del metodo palabraMasParidad.
 *  @param {String} cadena Texto formado por una cadena binaria de paridad.
 * @returns {Number} Devuelve la cantidad de bits de paridad que se necesitan para verificar la seccion de datos
 */
function cuantasVecesApareceUno(cadena) {
    var indices = [];
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] === '1')
            indices.push(i);
    }
    return indices.length;
}
/**
 * Funcion que reemplaza las x (en las posiciones de la palabra) pertenecientes a la paridad por sus valores hallados (0 y 1).
 *  Forma parte del metodo palabraMasParidad.
 * @param {String} str Es la palabra binaria que contiene la paridad y la seccion de datos
 * @param {Number} index Es la posicion donde se reemplaza el bit de paridad que se halla dentro de la palabra.
 * @param {Array} chr Array de String que contiene la palabra conformado por los bits de paridad.
 * @returns {String} Devuelve la palbra + los bits de paridad insertados.
 */
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}
/**
 * Funcion que devuelve la palabra conformada por datos y sus bits de paridad.
 * @param {String} hamming Contiene una cadena de digitos binarios formando el CRC.
 * @param {Number} bitsDeParidad Es el numero d bits de paridad que se necesitan verificar la recepcion de la trama
 * @returns {String} Devuelve la palabra palabra conformada por datos y sus bits de paridad.
 */
function palabraMasParidad(hamming, bitsDeParidad) {
    var number = 0;
    var palabra = "";
    var size = bitsDeParidad + hamming.length;

    for (var j = 0; j < size; j++) {

        //1-Armo la palabra completa
        if (j == 0 || (Math.pow(2, number) / j) == 2 && bitsDeParidad > number) {

            palabra += 'x';
            number++;

        } else {
            palabra += hamming.charAt(j);
        }
    }
    /*
    2-Calculo para cada paridad su valor correspondiente:
     
    */
    var lsb = '';
    var paridad = '';
    var position = 0;
    var lsbPalabra = 1;
    var paridades = [];

    while (0 < bitsDeParidad) {

        for (var k = 1; k <= size; k++) {
            lsb = (convertToBinary(k)).charAt((convertToBinary(k).length - lsbPalabra));

            if (lsb == '1') {
                if (palabra.charAt(position) != 'x') {
                    paridad += palabra.charAt(k);
                } else {
                    paridad += '1';
                }

            } else {
                if (palabra.charAt(position) != 'x') {
                    paridad += palabra.charAt(position);
                }
            }
            position++;
        }

        var cantidadDeUnos = cuantasVecesApareceUno(paridad);
        paridad = '';

        if (cantidadDeUnos % 2 != 0) {
            paridad = '1';
        } else {
            paridad = '0';
        }
        paridades[lsbPalabra - 1] = paridad;
        bitsDeParidad--;
        lsbPalabra++;
    }
    for (var i = 0; i < paridades.length; i++) {
        console.log('Paridad ' + (i + 1) + ' ' + paridades[i]);
    }

    var h = 0;
    for (var i = 0; i < palabra.length; i++) {

        if (palabra[i] == "x") {

            palabra = setCharAt(palabra, i, paridades[h]);
            h++;
        }
    }
    console.log('Palabra + Paridad es: ' + palabra);
    return palabra;
}
/************************Inicio de main******************************/

//Importando el archivo Jason
/**
 * Esta variable aguarda un archivo de tipo Json que contiene el pequete enviado.
 * @type {Object}: datos almacena el contenido del archivo trama.json
 */
var datos = require('./trama.json');
//Accediendo a las claves y valores del jason:
var obj = datos.trama[0];
var pay = datos.trama[1].payload;

imprimirJson(obj);

//Creacion de objeto:
var Trama = require('./Trama.js');
let trama = new Trama();

//Insercion de los elemento dentro del objeto
trama = insercion(trama, obj);

//Impresion de la cabecera y de los datos
trama.imprimirCabecera(trama);
trama.imprimirDatos(trama.payload);

/*+++++++++++++Validaciones+++++++++++++*/
var sumaBytesCabecera = 0,
    sumaBytesDatos = 0,
    sumaBytesTotal = 0;
//Cantidad de bytes totales de la trama: entre 84–1542
longitudDeTrama(sumaBytesCabecera, sumaBytesDatos, sumaBytesTotal);
verificarHexadecimal(obj);
convertirABinario(obj, pay);
//Calcular CRC
var hamming = "";
hamming = calculoDeCrc(trama, pay, hamming);
//Armar la palabra con los bits de paridad
var bitsDeParidad = 0;
bitsDeParidad = cantidadBitDeParidad(bitsDeParidad, hamming);
//Obtencion de la palabra completa (palabra transmitida mas paridad)
palabra = palabraMasParidad(hamming, bitsDeParidad);

/*+++++++fin de las Validaciones++++++++*/


/*Creacion de la conexion de la BBDD:

npm init
https://www.npmjs.com/package/mysql
npm install --save mysql

http://localhost/phpmyadmin 
Es necesario crear la Database trama en el Xampp

Para probar la conexion tambien podemos escribir npm init -y devuelve un Json.

>node 2-ejercicio.js

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trama'
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Conection succesfull');
});


console.log('connected as id ' + connection.threadId);

/*Insercion de datos: 
const insertar = "INSERT INTO trama (preambulo) VALUES ('ff0324')";
connection.query(insertar, (err, rows) => {
    if (err) throw err;
})

/*Hacemos una consulta a la BBDD*(Query-)
connection.query('SELECT * from trama', (err, rows) => {
    if (err) throw err;
    console.log('La cantidad de registros hallados es: ' + rows.length);
    console.log('Los datos de la tabla son: ');
    console.log(rows);

    const usuario = rows[0];
    console.log("ID del primer registro: " + usuario.preambulo);
});
connection.end(); 
const usuario = rows[0];
console.log("ID del primer registro: " + usuario.preambulo);
});
connection.end(); */