'use strict'

const princiModel = require('../models/principal')



async function listarPrincipal(req,res){

    const result_principal=await  princiModel().listPrinci();
    res.render('principal/view_principal',{result_principal})


}


async function listarPrincipalApi(req,res){

    const result_principal=await princiModel().listPrinci();
    res.status(200).json({result_principal})


}


async function cargarPrincipal(req,res){

    const data =req.body;

    await  princiModel().crearPrinci(data);
    res.redirect('principal/listarPrincipal')
    //res.render('productos/list_productos',{result_productos})


}




async function cargarPrincipalApi(req,res){

    const data =req.body;

    await princiModel().crearPrinci(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}

async function borrarPrincipal(req,res){

    const data =req.params.id;

    await princiModel().eliminarPrinci(data);
    res.redirect('/principal/listarPrincipal')


}



async function borrarPrincipalApi(req,res){

    const data =req.params.id;

    await princiModel().eliminarPrinci(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}




async function cambiaPrincipal(req,res){


    const data =[
        req.body.correo,
        req.body.interesado,
        req.params.id

        
    ]
     

    await princiModel().modificaPrinci(data);
    res.redirect('/principal/listarPrincipal')
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })


}





async function cambiaPrincipalApi(req,res){


    const data =[
        req.body.correo,
        req.body.interesado,
        req.params.id

        
    ]
     

    await princiModel().modificaPrinci(data);
}










module.exports={
    listarPrincipal,
    listarPrincipalApi,
    cargarPrincipal,
    cargarPrincipalApi,
    borrarPrincipal,
    borrarPrincipalApi,
    cambiaPrincipal,
    cambiaPrincipalApi

}

