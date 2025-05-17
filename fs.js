const fs = require('fs');

//módulos sincronizado - Soloe ejecuta una tarea
/*

const primero = fs.readFileSync('./data/archivo1.txt', 'utf-8');
const segundo = fs.readFileSync('./data/archivo2.txt');

console.log(primero);
console.log(segundo.toString());

fs.writeFileSync('./data/archivo3.txt', 'Este es un tercer archivo'); //va crear un archivo 

*/

//módulos asincrono se va ejecutar multiples tareas al mismo tiempo

fs.readFile('./data/archivo2.txt', 'utf-8', (error, data) => {

    fs.readFile('./data/archivo1.txt', function (error, data) {
        console.log(error);
        console.log(data); //nos da la momoria Buffer
        console.log(data.toString()); //muestra el texto
    });

    if(error){
       console.log(error);
    };
    console.log(data);

    fs.writeFile('./data/newfile2.txt', 'archivo creado desde fs', (err, data) => {
        console.log(err);
        console.log(data);
    });
});
