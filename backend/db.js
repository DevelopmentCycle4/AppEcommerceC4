import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/Ecommerce", {})
.then(() => console.log("Conectado a MongoDb"))
.catch((err)=> console.log(err))

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


