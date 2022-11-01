import express  from 'express'
import {consultar} from './db.js'

const app=express()
const port= 4000


app.get('./prueba',(req,res)=>{
    res.send('Servidor listo')
})

app.listen(port,()=>{
    console.log('Estoy ejecutandome en http://localhost:${port}')
})

consultar()

