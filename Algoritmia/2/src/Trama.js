/**
 * @file Clase contenedora del objeto Json que contiene la trama 802.3 IEEE
 * @author Maximiliano Di Ludovico <mdlprofesional@gmail.com>
 * @copyright Maximiliano Di Ludovico 2021
 * @version 1.0.0
 * 
 *  Creates a new Trama.
 * @class
 */

module.exports = class Trama {
    Trama() {}

    //cabecera
    get preambulo() {
        return this._preambulo;
    }
    set preambulo(preambulo) {
        this._preambulo = preambulo;
    }
    get delimitador() {
        return this._delimitador;
    }
    set delimitador(delimitador) {
        this._delimitador = delimitador;
    }
    get origen() {
        return this._origen;
    }
    set origen(origen) {
        this._origen = origen;
    }
    get destino() {
        return this._destino;
    }
    set destino(destino) {
        this._destino = destino;
    }
    get etiqueta() {
        return this.etiqueta;
    }
    set etiqueta(etiqueta) {
        this._etiqueta = etiqueta;
    }
    get longitud() {
        return this._longitud;
    }
    set longitud(longitud) {
        this._longitud = longitud;
    }
    get crc() {
        return this._crc;
    }
    set crc(crc) {
        this._crc = crc;
    }
    get gap() {
        return this._gap;
    }
    set gap(gap) {
        this._gap = gap;
    }

    //Datos
    get payload() {
        return this._payload;
    }
    set payload(payload) {
        this._payload = payload;
    }

    imprimirCabecera(obj) {

        for (var key in obj) {
            var value = obj[key];
            if (key != '_payload')
                console.log(key + ": " + value);
        }
    }
    imprimirDatos(pay) {

        for (var car of pay) {

            var value = car;
            for (var key in value) {
                var value = value[key];
                console.log(key + ": " + value);
            }
        }
    }
}