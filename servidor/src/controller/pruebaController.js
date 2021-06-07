'use strict'

const pruebaModel = require('../models/prueba.js')




async function listarPruebaApi(req,res){

    const result_prueba=await pruebaModel ().listPrueba();
    res.status(200).json({result_prueba})


}





async function cargarPruebaApi(req,res){

    const data =req.body;
    console.log(data)
    await pruebaModel ().crearPrueba(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}




async function borrarPruebaApi(req,res){

    const data =req.params.id;

    await pruebaModel ().eliminarPrueba(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}





async function cambiaPruebaApi(req,res){


    const data =[

        req.body.nombre_tarjeta,
        req.body.numero_tarjeta,
        req.body.fehca_vencimiento,
        req.params.id

        
    ]
     

    await pruebaModel().modificaPrueba(data);
}










module.exports={
    listarPruebaApi,
    cargarPruebaApi,
    borrarPruebaApi,
    cambiaPruebaApi
  

}

