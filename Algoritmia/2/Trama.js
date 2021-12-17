module.exports =class Trama{
    Trama(){
    }
    Trama(preambulo,delimitador,origen,destino,etiqueta,longitud,crc,gap,payload){
        this.preambulo = preambulo; 
        this.delimitador = delimitador;
        this.origen = origen;
        this.destino = destino;
        this.etiqueta = etiqueta;
        this.longitud = longitud;
        this.crc = crc;
        this.gap = gap;
        this.payload = payload;
    }

    get preambulo(){
        return this._nombre;
    }
    set preambulo(preambulo){
        this.preambulo = preambulo;
    }
    get delimitador(){
        return this.delimitador;
    }
    set delimitador(delimitador){
        this.delimitador = delimitador;
    }
    get origen(){
        return this.origen;
    }
    set origen(origen){
        this.origen = origen;
    }
    get destino(){
        return this.origen;
    }
    set destino(destino){
        this.destino = destino;
    }
    get etiqueta(){
        return this.origen;
    }
    set etiqueta(etiqueta){
        this.etiqueta = etiqueta;
    }
    get longitud(){
        return this.origen;
    }
    set longitud(longitud){
        this.longitud = longitud;
    }
    get crc(){
        return this.crc;
    }
    set crc(crc){
        this.crc = crc;
    }
    get gap(){
        return this.crc;
    }
    set gap(gap){
        this.gap = gap;
    }
    get payload(){
        return this.crc;
    }
    set payload(payload){
        this.payload = payload;
    }
saludar(){
    return "Hola mi nombre es " ;
}
    
}