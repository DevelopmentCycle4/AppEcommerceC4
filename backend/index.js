const express=require('express')
const cors=require('cors')

const app=express()
const port= 3000



app.get('./prueba',(req,res)=>{
    res.send('Servidor listo')
})

app.listen(port,()=>{
    console.log('Estoy ejecutandome en http://localhost:${port}')
})

GET-> micomputadora/pokemones->Devuelve los pokemones
POST-> micomputadora/pokemones con {pokemon}->guarda el pokemon
