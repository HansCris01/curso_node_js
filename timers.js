//funciones que ejecuta por tiempos

//setInterval se suele usar para ejecutar una funcion en el tiempo que le especifiques

function suma(a, b){
   let operacion = a + b;
   return operacion;
};

setInterval(() => {
   console.log(suma(23, 45));
}, 2000); //se va ejecutar cada 2 segundos de manera automática



//setTimeout Ejecuta una vez en el tiempo que le asignes 

setTimeout(() => {
    console.log('Hola mundo');
}, 3000); //se ejecutara una vez en 3 segundos

