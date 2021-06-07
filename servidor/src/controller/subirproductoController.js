'use strict'

const productModel = require('../models/subirproducto')




async function listarProductosApi(req,res){

    const result_productos=await productModel().listProduct();
    res.status(200).json({result_productos})


}







async function cargarProductosApi(req,res){

    const data =req.body;

    await productModel().crearProduct(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}





async function borrarProductosApi(req,res){

    const data =req.params.id;

    await productModel().eliminarProduct(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}









async function cambiaProductosApi(req,res){


    const data =[
        req.body.nombres,
        req.body.apellidos,
        req.body.correo,
        req.body.celular,
        req.body.direccion,
        req.body.ciudad,
        req.body.producto,
        req.body.categoria,
        req.body.nombre_producto,
        req.body.manejo_producto,
        req.body.comentario,
        req.params.id

        
    ]
     

    await productModel().modificaProduct(data);
}










module.exports={
    
    listarProductosApi,
    
    cargarProductosApi,
   
    borrarProductosApi,
    
    cambiaProductosApi

}