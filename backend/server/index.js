import express  from 'express';
import productsRoutes from "./routes/productsroutes.js"
import {DBconnection} from './db.js'
import { PORT } from './config.js';
//import {consultar} from './db.js'

const app=express()
DBconnection();
//const port= 4000
app.use(productsRoutes)


app.get('./prueba',(req,res)=>{
    res.send('Servidor listo')
})

app.listen(PORT);
    console.log('Estoy ejecutandome en puerto', PORT);


//consultar()

