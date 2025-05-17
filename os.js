const os = require('os');

console.log(os.userInfo()); //nos va a dar información del repositorio de nuestro software
console.log(os.uptime()); //nos dice el tiempo en segundos que estuve ejecutando la computadora
console.log(os.platform()); //da irformación de la platorma, en este caso seria el OS. Windows
console.log(os.totalmem()); //ver funcion de la memoria 
console.log(os.freemem());//ver la memoria disponible

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
}); //nos da la información de nuestro sistema operativo en una tabla


//Esto sirve para desarrollo de Aplicaciones de Desk, movil o app de consolas