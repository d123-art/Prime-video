'use strict'

const empenoModel = require('../models/empeno')





async function listarEmpeno(req,res){

    const result_empeno=await  empenoModel().listEmpeno();
    res.render('empeno/view_empeno',{result_empeno})


}


async function listarEmpenoApi(req,res){

    const result_empeno=await empenoModel().listEmpeno();
    res.status(200).json({result_empeno})


}


async function cargarEmpeno(req,res){

    const data =req.body;

    await  empenoModel().crearEmpeno(data);
    res.redirect('empeno/listarEmpeno')
    //res.render('productos/list_productos',{result_productos})


}




async function cargarEmpenoApi(req,res){

    const data =req.body;

    await empenoModel().crearEmpeno(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}

async function borrarEmpeno(req,res){

    const data =req.params.id;

    await empenoModel().eliminarEmpeno(data);
    res.redirect('/empeno/listarEmpeno')


}



async function borrarEmpenoApi(req,res){

    const data =req.params.id;

    await empenoModel().eliminarEmpeno(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}




async function cambiaEmpeno(req,res){


    const data =[
        req.body.nombres,
        req.body.correo,
        req.body.celular,
        req.body.telefono,
        req.body.ciudad,
        req.body.cargo,
        req.body.fecha_nacimiento,
        req.body.pregunta,
        req.params.id

        
    ]
     

    await empenoModel().modificaEmpeno(data);
    res.redirect('/empeno/listarEmpeno')
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })


}





async function cambiaEmpenoApi(req,res){


    const data =[
        req.body.nombres,
        req.body.correo,
        req.body.celular,
        req.body.telefono,
        req.body.ciudad,
        req.body.cargo,
        req.body.fecha_nacimiento,
        req.body.pregunta,
        req.params.id
       

        
    ]
     

    await empenoModel().modificaEmpeno(data);
}



module.exports={
    listarEmpeno,
    listarEmpenoApi,
    cargarEmpeno,
    cargarEmpenoApi,
    borrarEmpeno,
    borrarEmpenoApi,
    cambiaEmpeno,
    cambiaEmpenoApi


    
}

