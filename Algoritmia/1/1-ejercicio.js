var datos = require('./data.json'); //with path

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
 
 console.log(datos.cuenta+' '+datos.nombre+' '+datos.apellido);
 
 //1-Extraccion del objetos cuotas
 let aranceles = Object.assign([{}] , datos.cuotas)

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
 
 
