//Importando el archivo Jason
var datos = require('./trama.json');
//Accediendo a las claves y valores del jason:
    var obj = datos.trama[0];
    for (var key in obj){
        var value = obj[key];
console.log(key + ": " + value);
    }

    var pay = datos.trama[1].payload;
    for (var car of pay) 
    {
        var value = car;
        for (var key in value){
            var value = value[key];
    console.log(key + ": " + value);
        }
    
    }
    //Creacion de objeto:
    var Trama = require('./Trama.js');
    let trama = new Trama();
console.log( trama.saludar() );

/*Creacion de la conexion de la BBDD:

npm init
https://www.npmjs.com/package/mysql
npm install --save mysql

http://localhost/phpmyadmin 
Es necesario crear la Database trama
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'trama'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 

    console.log('connected as id ' + connection.threadId);

//connection.end();




