//Tipo de dato object

let datos = [{
  cuenta: "123456",
  nombre: "Juan",
  apellido: "Pérez",
  cuotas: [
    { cuota: 13, importe: 123.4567 },
    { cuota: 7, importe: 234.5678 },
    { cuota: 2, importe: 456.789 },
    { cuota: 11, importe: 567.8901 },
    { cuota: 3, importe: 678.9012 },
    { cuota: 9, importe: 789.0123 },
    { cuota: 12, importe: 890.1234 },
    { cuota: 14, importe: 901.2345 },
    { cuota: 8, importe: 12.3456 },
  ]},
  {
  cuenta: "1739607",
  nombre: "Pedro",
  apellido: "lopez",
  cuotas: [
    { cuota: 13, importe: 123.4567 },
    { cuota: 7, importe: 234.5678 },
    { cuota: 2, importe: 456.789 },
    { cuota: 11, importe: 567.8901 },
    { cuota: 3, importe: 678.9012 },
    { cuota: 9, importe: 789.0123 },
    { cuota: 12, importe: 890.1234 },
    { cuota: 14, importe: 901.2345 },
    { cuota: 8, importe: 12.3456 },
  ],
}];

 //2-Ordenamiento por clave del objeto cuotas
    function sortDataBy (aranceles, byKey){
      let sortedData;
      if(byKey == 'cuota'){
       
        sortedData = aranceles.sort(function(a,b){
          aranceles
          return a.cuota - b.cuota;
        })
      }
      return sortedData;
    }

for (var key in datos) {
if (datos.hasOwnProperty(key)) {
 
  console.log(datos[key].cuenta+' '+datos[key].nombre+' '+datos[key].apellido);
  
 	 //1-Extraccion del objetos cuotas
	let aranceles = Object.assign([{}] , datos[key].cuotas)
	 aranceles=sortDataBy(aranceles, 'cuota')
    let ultimaCuota = aranceles[aranceles.length-1].cuota
        
     //3-Impresion de los resultados
     let consecutivos = new Array();
   let k=0
      for( let i = 0 ; i< aranceles.length-1; i++ ){
     
       
        if( ( aranceles[i + 1].cuota - aranceles[i].cuota ) == 1 ){
       
          consecutivos[k]  = aranceles[i].cuota
          consecutivos[k+1]= aranceles[i+1].cuota
          k++
        
          }
        else{
             
                console.log('Cuotas consecutivas '+consecutivos)
                k++
                }
        }
  
     console.log('Cuotas consecutivas '+consecutivos)
}
}
