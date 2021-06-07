'use strict'

const comentarioModel = require('../models/comentario')







async function listarComentarioApi(req,res){

    const result_comentario=await comentarioModel().listComentario();
    res.status(200).json({result_comentario})


}





async function cargarComentarioApi(req,res){

    const data =req.body;

    await comentarioModel().crearComentario(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}





async function borrarComentarioApi(req,res){

    const data =req.params.id;

    await comentarioModel().eliminarComentario(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}







async function cambiaComentarioApi(req,res){


    const data =[
        req.body.correo,
        req.body.problema,
        req.params.id
       

        
    ]
     

    await comentarioModel().modificaComentario(data);
}



module.exports={
    listarComentarioApi,
    cargarComentarioApi,
    borrarComentarioApi,
    cambiaComentarioApi


    
}

