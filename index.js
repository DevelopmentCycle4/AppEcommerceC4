const http =require('http');  /**este modulo nos ayuda a llamar un servidor Web */

const server = http.createServer((req,res) => {
    res.status =200;
    res.setHeader('Content-Type','text/plain');
    res.end('Bienvenidos');/**llamar metodo */
}); 

server.listen(3000,()=> {
    console.log('Serve on port 3000')
    
})