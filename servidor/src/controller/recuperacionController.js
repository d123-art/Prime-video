'use strict'

const recuperacionModel = require('../models/recuperacion.js')




async function listarRecuperacionApi(req,res){

    const result_recu=await recuperacionModel ().listRecuperacion();
    res.status(200).json({result_recu})


}





async function cargarRecuperacionApi(req,res){

    const data =req.body;
console.log(data)
    await recuperacionModel ().crearRecuperacion(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}




async function borrarRecuperacionApi(req,res){

    const data =req.params.id;

    await recuperacionModel ().eliminarRecuperacion(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}





async function cambiaRecuperacionApi(req,res){


    const data =[

        req.body.correo,
        req.params.id

        
    ]
     

    await recuperacionModel().modificaRecuperacion(data);
}










module.exports={
    listarRecuperacionApi,
    cargarRecuperacionApi,
    borrarRecuperacionApi,
    cambiaRecuperacionApi
  

}

