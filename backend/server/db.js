import mongoose from "mongoose";
import {MONGODB_URI} from "./config.js"

export async function DBconnection(){
    try{
        const db = await mongoose.connect(MONGODB_URI);
        console.log("Estableciendo Coneccion a" , db.connection.name);
    } catch(error) {
        console.log(error.message);
    }
}
const esquema = mongoose.Schema({
    nombre:String,
    precio:Number,
    descripcion:String,
    calificacion:Number,
    id:String,
    categoria:String,
    vendedor:String,
    inventario:Number,

})

const modelo = mongoose.model("productos" , esquema)

//consultas

async function consultar (){
    let documentos = await modelo.findById()
    console.log(documentos)
}

export {consultar}

