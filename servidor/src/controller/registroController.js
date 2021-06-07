'use strict'

const registroModel = require('../models/registro')

async function listarRegistro(req,res){

    const result_registro=await registroModel().listRegistro();
    res.render('registro/view_registro',{result_registro})


}


async function listarRegistroApi(req,res){

    const result_registro=await registroModel().listRegistro();
    res.status(200).json({result_registro})


}



async function cargarRegistro(req,res){

    const data =req.body;

    await registroModel().crearRegistro(data);
    res.redirect('/registro/listarRegistro')
    //res.render('productos/list_productos',{result_productos})


}





async function cargarRegistroApi(req,res){

    const data =req.body;
console.log(data)
    await registroModel().crearRegistro(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}

async function borrarRegistro(req,res){

    const data =req.params.id;

    await registroModel().eliminarRegistro(data);
    res.redirect('/registro/listarRegistro')


}



async function borrarRegistroApi(req,res){

    const data =req.params.id;

    await registroModel().eliminarRegistro(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}




async function cambiaRegistro(req,res){


    const data =[
        req.body.nombre,
        req.body.correo,
        req.body.contrasena,
        req.body.confirmacion,
        req.params.id
        
    ]
     

    await registroModel().modificaRegistro(data);
    res.redirect('/registro/listarRegistro')
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })


}





async function cambiaRegistroApi(req,res){


    const data =[

        req.body.nombre,
        req.body.correo,
        req.body.confirmacion,
        req.params.id

        
    ]
     

    await registroModel().modificaRegistro(data);
}










module.exports={
    listarRegistro,
    listarRegistroApi,
    cargarRegistro,
    cargarRegistroApi,
    borrarRegistro,
    borrarRegistroApi,
    cambiaRegistro,
    cambiaRegistroApi

}

