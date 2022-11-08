const Order=require("../models/orderr");
const Product= require("../models/productos")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//Crear nuevo pedido

exports.newOrder= catchAsyncErrors (async (req, res, next)=>{
    const {
        Items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo
    } = req.body;

    const order= await Order.create({
        Items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo,
        fechaPago: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success:true,
        order
    })
})

//Ver un pedido

exports.getOneOrder= catchAsyncErrors(async(req, res, next)=>{
    const order= await Order.findById(req.params.id).populate("user", "nombre email") 

    if(!order){
        return next(new ErrorHandler("No existe el pedido con ese Id",404))
    }

    res.status(200).json({
        success:true,
        order
    })
})

//Ver todas los pedidos (usuario logueado)

exports.myOrders= catchAsyncErrors(async(req,res, next)=>{
    const orders= await Order.find({user: req.user._id});

    res.status(200).json({
        success:true,
        orders
    })
})

//Admin
//Ver todas los pedidos (Administrador)

exports.allOrders= catchAsyncErrors(async (req, res, next)=>{
    const orders= await Order.find()

    let cantidadTotal= 0;
    orders.forEach(order =>{
        cantidadTotal= cantidadTotal + order.precioTotal

       // cantidadTotal += pedido(cantidad).precioTotal
    })

    res.status(200).json({
        success:true,
        cantidadTotal,
        orders
    })

})

//Editar un pedido (admin) 

exports.updateOrder= catchAsyncErrors(async(req, res, next)=>{
    const order= await Order.findById(req.params.id)

    if(!order){
        return next (new ErrorHandler("Pedido no encontrado", 404))
    }

    if (order.estado==="Enviado"){
        return next(new ErrorHandler("Este pedido ya fue enviado", 400))
    }

    order.estado= req.body.estado;
    order.fechaEnvio= Date.now();

    await order.save()

    res.status(200).json({
        success:true,
        order
    })
})

async function updateStock(id, quantity){
    const product = await Product.findById(id);
    product.inventario= product.inventario-quantity;
    await product.save({validateBeforeSave: false})
}

//Eliminar un pedido (admin)

exports.deleteOrder = catchAsyncErrors(async (req, res, next)=>{
    const order = await Order.findById(req.params.id);

    if(!order){
        return next (new ErrorHandler("El pedido no esta registrado", 404))
    }
    await order.remove()

    res.status(200).json({
        success:true,
        message:"Pedido eliminado correctamente"
    })
})