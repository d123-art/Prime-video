'use strict'

const noticiaModel = require('../models/noticia')

async function listarNoticia(req,res){

    const result_noticia=await noticiaModel().listNoticia();
    res.render('noticia/view_noticia',{result_noticia})


}


async function listarNoticiaApi(req,res){

    const result_noticia=await noticiaModel().listNoticia();
    res.status(200).json({result_noticia})


}


async function cargarNoticia(req,res){

    const data =req.body;

    await noticiaModel().crearNoticia(data);
    res.redirect('/noticia/listarNoticia')
    //res.render('productos/list_productos',{result_productos})


}




async function cargarNoticiaApi(req,res){

    const data =req.body;

    await noticiaModel().crearNoticia(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}

async function borrarNoticia(req,res){

    const data =req.params.id;

    await noticiaModel().eliminarNoticia(data);
    res.redirect('/noticia/listarNoticia')


}



async function borrarNoticiaApi(req,res){

    const data =req.params.id;

    await noticiaModel().eliminarNoticia(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}




async function cambiaNoticia(req,res){


    const data =[
        req.body.nombres,
        req.body.correo,
        req.body.tipo_noticia,
        req.params.id
        
    ]
     

    await noticiaModel().modificaNoticia(data);
    res.redirect('/noticia/listarNoticia')
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })


}





async function cambiaNoticiaApi(req,res){


    const data =[

        req.body.nombres,
        req.body.correo,
        req.body.tipo_noticia,
        req.params.id

        
    ]
     

    await noticiaModel().modificaNoticia(data);
}










module.exports={
    listarNoticia,
    listarNoticiaApi,
    cargarNoticia,
    cargarNoticiaApi,
    borrarNoticia,
    borrarNoticiaApi,
    cambiaNoticia,
    cambiaNoticiaApi

}

