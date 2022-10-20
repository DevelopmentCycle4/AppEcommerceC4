/*const http =require('http');  /**este modulo nos ayuda a llamar un servidor Web 

const server = http.createServer((req,res) => {
    res.status =200;
    res.setHeader('Content-Type','text/plain');
    res.end('Bienvenidos');
}); /** 
server.listen(3000,()=> {
    console.log('Serve on port 3000')
    
}); */



/*Express trae http asi que no es necesario escribir este codigo,solo se necesita para iniciar.**/


const express  = require('express'); /*este modulo es quien agrega http**/
const app =express();

app.get ('/',(req,res) => {
    res.send('Bienvenido a tu tienda Online');
}
)
app.listen(3000,() => {
    console.log('Server on Port 3000');

});