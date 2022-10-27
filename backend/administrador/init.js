const express  = require('express'); /*este modulo es quien agrega http**/
const app =express();

app.get ('/',(req,res) => {
    res.send('Bienvenido a tu tienda Online');
});
app.listen(3000,() => {
    console.log('Server on Port 3000');

}); 