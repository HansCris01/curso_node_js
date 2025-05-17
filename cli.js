//para consultar versiones de npm:   npm --version

//vamos a instalar el:   npm install colors   o   npm i colors

//se va crear un archivo package.json  --> donde va decir lo que instalamos
//se va crear un archivo package-lock.json --> te va decir lo que necesita la dependencia que instalastes o te dice lo que ya esta instalado
//se va crear la carpeta node_modules donde esta instalado el colors y vas a ver una carpeta color

const colors = require('colors');

console.log("Hola mundo".bgBlue);
console.log("php.com".bgGreen);
console.log("js.com".bgRed);


//vamos a instalar: npm i lodash dayjs bootstrap
//En la carpeta node_modules/   -->  se va agregar los paquetes de instalación
//si nos fijamos en package.json --> se ha agregado el registro de instalación

//Ahora si los paquetes de node_modules se borra, podemos recuperarlo con el archivo: package.json
//comando para recuperar los paquetes instalarlo: npm install
//Si queremos quitar un modulo que instalamos, vamos a escribir este codigo: npm remove boostrap   --> en ese caso estamos desinstalamos boostrap del proyecto