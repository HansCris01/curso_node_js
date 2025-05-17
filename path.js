const path = require('path'); //constante porque no se va modificar

//el path te va traer la información de tu sistema operativo


console.log(path);
const filePath =  path.join('/mi_modulos', '/modulosPersonalizados.js'); //sirve para importar los path de módulos tienes que crear esas carpetas y archivo

console.log(path.basename(filePath)); //te dice el archivo
console.log(path.dirname(filePath)); //te dice el directorio
console.log(path.parse(filePath)); //te da la informacion en un arreglo
console.log(path.resolve('dist'));

//Esto sirve como codigo de servidor