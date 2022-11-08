import express  from 'express';
import productsRoutes from "./routes/productsroutes.js"
//import {consultar} from './db.js'

const app=express()
const port= 4000
app.use(productsRoutes)


app.get('./prueba',(req,res)=>{
    res.send('Servidor listo')
})

app.listen(4000);
    console.log('Estoy ejecutandome en puerto', 4000);


//consultar()

