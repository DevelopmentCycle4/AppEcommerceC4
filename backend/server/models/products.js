import mongoose from "mongoose";

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[100,"El nombre del producto no debe exceder los 100 caracteres."]
    },
    precio:{
        type: Number,
        required:[true,"Por favor registre el precio del producto."],
        trim:true,
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
        
    },
    descripcion:{
      type:String,
      required:[true,"Por favor registre una descripcion para el producto."],
      trim:true,
      
    },
    calificacion:{
        type: Number,
        trim:true,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto."],
        trim:true,
        enum:{
            values:[
                "Tenis1",
                "Tenis2",
                "Tenis3",
                "Tenis4",
                "Tenis5",
                "OtrosProductos",
                      ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor de producto"],
        trim:true,
    },
    inventario:{
        type: Number,
        required:[true, "Por favor registre el stock del producto"],
        trim:true,
        maxLength:[5,"Cantidad maxima del producto no puede sobrepasar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        trim:true,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        trim:true,
        default:Date.now
    }

})

module.exports=mongoose.model("productos",productosSchema)
