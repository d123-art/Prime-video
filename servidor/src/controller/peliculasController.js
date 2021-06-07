'use strict'

const peliModel = require('../models/peliculas')





async function listarPeliculasApi(req,res){

    const result_peliculas=await peliModel().listPeliculas();
    res.status(200).json({result_peliculas})


}







async function cargarPeliculasApi(req,res){

    const data =req.body;

    await peliModel().crearPeliculas(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}




async function borrarPeliculasApi(req,res){

    const data =req.params.id;

    await peliModel().eliminarPeliculas(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}








async function cambiaPeliculasApi(req,res){


    const data =[
        req.body.nombre,
        req.body.descripcion,
        req.body.archivo,
        req.params.id

        
    ]
     

    await peliModel().modificaPeliculas(data);
}










module.exports={
    listarPeliculasApi,
    cargarPeliculasApi,
    borrarPeliculasApi,
    cambiaPeliculasApi

}

