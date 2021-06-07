'use strict'

const todousuarios = require('../models/usuarios')

async function listALL (req = null){

    const listALL = await todousuarios().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todousuarios().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todousuarios().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todousuarios().modificar(req)
    return modificar
}




module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
  
}