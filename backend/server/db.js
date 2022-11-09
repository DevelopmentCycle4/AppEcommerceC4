import mongoose from "mongoose";

export async function DBconnection(){
    try{
        const db = await mongoose.connect(
            "mongodb+srv://EcommerceC4:pUkiCEbQ0NpsY8Uq@cluster0.0qlbckm.mongodb.net/EcommerceC4"
        );
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


