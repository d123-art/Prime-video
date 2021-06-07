'use strict'

const opinionModel = require('../models/opinion')




async function listarOpinion(req,res){

    const result_opinion=await opinionModel().listOpinion();
    res.render('opinion/view_opinion',{result_opinion})


}


async function listarOpinionApi(req,res){

    const result_opinion=await opinionModel().listOpinion();
    res.status(200).json({result_opinion})


}


async function cargarOpinion(req,res){

    const data =req.body;

    await opinionModel().crearOpinion(data);
    res.redirect('/opinion/listarOpinion')
    //res.render('productos/list_productos',{result_productos})


}




async function cargarOpinionApi(req,res){

    const data =req.body;

    await opinionModel().crearOpinion(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}

async function borrarOpinion(req,res){

    const data =req.params.id;

    await opinionModel().eliminarOpinion(data);
    res.redirect('/opinion/listarOpinione')


}



async function borrarOpinionApi(req,res){

    const data =req.params.id;

    await opinionModel().eliminarOpinion(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}




async function cambiaOpinion(req,res){


    const data =[
        req.body.nombres,
        req.body.correo,
        req.body.calificacion,
        req.body.opinion,
        req.params.id

        
    ]
     

    await opinionModel().modificaOpinion(data);
    res.redirect('/opinion/listarOpinion')
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })


}





async function cambiaOpinionApi(req,res){


    const data =[
        req.body.nombres,
        req.body.correo,
        req.body.calificacion,
        req.body.opinion,
        req.params.id

        
    ]
     

    await opinionModel().modificaOpinion(data);
}










module.exports={
    listarOpinion,
    listarOpinionApi,
    cargarOpinion,
    cargarOpinionApi,
    borrarOpinion,
    borrarOpinionApi,
    cambiaOpinion,
    cambiaOpinionApi

}

