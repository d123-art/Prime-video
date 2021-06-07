'use strict'

const mensajeModel = require('../models/mensaje')





async function listarMensajeApi(req,res){

    const result_mensaje=await mensajeModel().listMensaje();
    res.status(200).json({result_mensaje})


}







async function cargarMensajeApi(req,res){

    const data =req.body;

    await mensajeModel().crearMensaje(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}




async function borrarMensajeApi(req,res){

    const data =req.params.id;

    await mensajeModel().eliminarMensaje(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}







async function cambiaMensajeApi(req,res){


    const data =[
        req.body.opc_inicial,
        req.body.opc_final,
        req.body.ontactarnos,
        req.params.id

        
    ]
     

    await mensajeModel().modificaMensaje(data);
}










module.exports={
    
    listarMensajeApi,
   
    cargarMensajeApi,
    
    borrarMensajeApi,
    
    cambiaMensajeApi

}
