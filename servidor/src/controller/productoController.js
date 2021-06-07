'use strict'

const productoModel = require('../models/producto')



async function listarProduc(req,res){

    const result_product=await  productoModel().listProducto();
    res.render('compras/view_producto',{result_product})


}


async function listarProducApi(req,res){

    const result_product=await productoModel().listProducto();
    res.status(200).json({result_product})


}


async function cargarProduc(req,res){

    const data =req.body;

    await  productoModel().crearProducto(data);
    res.redirect('compras/listarProduc')
    //res.render('productos/list_productos',{result_productos})


}




async function cargarProducApi(req,res){

    const data =req.body;

    await productoModel().crearProducto(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}

async function borrarProduc(req,res){

    const data =req.params.id;

    await productoModel().eliminarProducto(data);
    res.redirect('/compras/listarProduc')


}



async function borrarProducApi(req,res){

    const data =req.params.id;

    await productoModel().eliminarProducto(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}




async function cambiaProduc(req,res){


    const data =[
        req.body.nombres,
        req.body.apellidos,
        req.body.tipo,
        req.body.numero,
        req.body.edad,
        req.body.nacimiento,
        req.body.celular,
        req.body.telefono,
        req.body.correo,
        req.body.ciudad_pais,
        req.body.direccion,
        req.body.producto,
        req.params.id

        
    ]
     

    await productoModel().modificaProducto(data);
    res.redirect('/compras/listarProduc')
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })


}





async function cambiaProducApi(req,res){


    const data =[
        req.body.nombres,
        req.body.apellidos,
        req.body.tipo,
        req.body.numero,
        req.body.edad,
        req.body.nacimiento,
        req.body.celular,
        req.body.telefono,
        req.body.correo,
        req.body.ciudad_pais,
        req.body.direccion,
        req.body.mensaje,
        req.params.id
       

        
    ]
     

    await productoModel().modificaProducto(data);
}



module.exports={
    listarProduc,
    listarProducApi,
    cargarProduc,
    cargarProducApi,
    borrarProduc,
    borrarProducApi,
    cambiaProduc,
    cambiaProducApi


    
}