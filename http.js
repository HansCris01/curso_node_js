const http = require('http');

/* http 

http.createServer(function (request, response){
    response.write('Hola mundo');
    response.end();
}).listen(3000);

console.log('Servidor escuchando en el puerto 3000');
*/ 

//vamos al navegador y colocamos esto: localhost:3000

//En el navegador nos tiene que dar: Hola mundo


//Request

http.createServer(function (request, response){
    console.log(request.url); //nos va dar información del request que es una especie de salida

   if(request.url === '/'){
      response.write('Welcome to the server');
      return response.end();
   }

    if(request.url === '/about'){
       response.write('Acerca de');
       return response.end();
    }

    response.write('Not found');
    response.end();
}).listen(3000);

console.log('Servidor escuchando en el puerto 3000');

//ve al navegador y escribe: localhost:3000/about
//al agregar about al url lo va capturar en la consola y va aparecer una pagina web diciendo: acerca de