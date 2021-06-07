'use strict'

const invitarModel = require('../models/invitar')




async function listarInvitar(req,res){

    const result_invitar=await invitarModel().listInvitar();
    res.render('invitar/view_invitar',{result_invitar})


}


async function listarInvitarApi(req,res){

    const result_invitar=await invitarModel().listInvitar();
    res.status(200).json({result_invitar})


}


async function cargarInvitar(req,res){

    const data =req.body;

    await invitarModel().crearInvitar(data);
    res.redirect('/invitar/listarInvitar')
    //res.render('productos/list_productos',{result_productos})


}




async function cargarInvitarApi(req,res){

    const data =req.body;

    await invitarModel().crearInvitar(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}

async function borrarInvitar(req,res){

    const data =req.params.id;

    await invitarModel().eliminarInvitar(data);
    res.redirect('/invitar/listarInvitar')


}



async function borrarInvitarApi(req,res){

    const data =req.params.id;

    await invitarModel().eliminarInvitar(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}




async function cambiaInvitar(req,res){


    const data =[
        req.body.nombres,
        req.body.correo,
        req.body.celular,
        req.body.ciudad,
        req.body.link,
        req.body.mensaje,
        req.body.nombre_in,
        req.body.correo_in,
        req.params.id

        
    ]
     

    await invitarModel().modificaInvitar(data);
    res.redirect('/invitar/listarInvitar')
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })


}





async function cambiaInvitarApi(req,res){


    const data =[

        req.body.nombres,
        req.body.correo,
        req.body.celular,
        req.body.ciudad,
        req.body.link,
        req.body.mensaje,
        req.body.nombre_in,
        req.body.correo_in,
        req.params.id

        
    ]
     

    await invitarModel().modificaInvitar(data);
}










module.exports={
    listarInvitar,
    listarInvitarApi,
    cargarInvitar,
    cargarInvitarApi,
    borrarInvitar,
    borrarInvitarApi,
    cambiaInvitar,
    cambiaInvitarApi

}

