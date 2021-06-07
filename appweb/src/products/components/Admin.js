import React,{useState,useEffect} from 'react'
import {Container, Section, Button} from 'react-bulma-components'


import clienteAxios from '../../config/axios'



export default function Admin(){


    const [recuperacion,setRecuperacion] = useState([])

    async function loadRecuperacion(){
      const dato = await clienteAxios.get(`/recuperacion/api/listarRecuperacion`);
      console.log(dato);
        setRecuperacion(dato.data.result_recu)
     
        
  
  }


  const EliminarRecuperacion= async(id)=>{
    try{
        const response = await clienteAxios.delete(`/recuperacion/api/eliminar/${id}`)
        setRecuperacion(recuperacion.filter(recuperacion=>recuperacion.id !== id))


    }catch(error){
        console.log(error)
    }

}







const [prueba,setPrueba] = useState([])

async function loadPrueba(){
  const dato = await clienteAxios.get(`/prueba/api/listarPrueba`);
  console.log(dato);
    setPrueba(dato.data.result_prueba)
 
    

}


const eliminarPrueba= async(id)=>{
try{
    const response = await clienteAxios.delete(`/prueba/api/eliminar/${id}`)
    setPrueba(prueba.filter(prueba=>prueba.id !== id))


}catch(error){
    console.log(error)
}

}


















  const [mensaje,setMensaje] = useState([])

  async function loadMensaje(){
    const dato = await clienteAxios.get(`/mensaje/api/listarMensaje`);
    console.log(dato);
      setMensaje(dato.data.result_mensaje)
   
      

}
const EliminarMensaje= async(id)=>{
    try{
        const response = await clienteAxios.delete(`/mensaje/api/eliminar/${id}`)
        setMensaje(mensaje.filter(mensaje=>mensaje.id !== id))


    }catch(error){
        console.log(error)
    }

}





const [peliculas,setPeliculas] = useState([])

async function loadPeliculas(){
  const dato = await clienteAxios.get(`/peliculas/api/listarPeliculas`);
  console.log(dato);
    setPeliculas(dato.data.result_peliculas)
 
    

}
const EliminarPeliculas= async(id)=>{
  try{
      const response = await clienteAxios.delete(`/peliculas/api/eliminar/${id}`)
      setPeliculas(peliculas.filter(peliculas=>peliculas.id !== id))


  }catch(error){
      console.log(error)
  }

}








const [registro,setRegistro] = useState([])

  async function loadRegistro(){
    const dato = await clienteAxios.get(`/registro/api/listarRegistro`);
    console.log(dato);
      setRegistro(dato.data.result_registro)
   
      

}


const EliminarRegistro= async(id)=>{
    try{
        const response = await clienteAxios.delete(`/registro/api/eliminar/${id}`)
        setRegistro(registro.filter(registro=>registro.id !== id))


    }catch(error){
        console.log(error)
    }

}

















  useEffect(() => {
      
 
    loadMensaje();
  loadPeliculas();
 
    loadRegistro();
 
    loadRecuperacion();
    loadPrueba();
  
   
    
}, []);






  

    return(
     

     

   <div>
       <br></br>
        <font face="Arial" size="7" color="black">Mensaje</font>

<div class="table-responsive">
<table class="table">
  
    <tr>
     
      <th >Correo</th>
      <th >Problema</th>   
      <th >#</th>
</tr>
    

    {mensaje.map((item)=> (
        <tr key={item.id}>
        <td>{item.correo}</td>
        <td>{item.problema}</td>
      
        
        <td>
        <Button
            className='button is-primary'
              
                >
                    Modificar
            </Button>


            <Button
            className='button is-danger'
            onClick={()=>EliminarMensaje(item.id)}  
            >
              Eliminar
            </Button>
        </td>
        </tr>

        
    
    ))}

    <br>
    </br>
    
    </table>
    </div>
   












    <div>
       <br></br>
       <font face="Arial" size="7" color="black">Registro</font>



       <div class="table-responsive">
<table class="table">
  
    <tr>
    <th >nombre</th>
      <th >Correo</th>
      <th >Contrasena</th>
      <th >confirmacion</th>
     
     
 
      <th >#</th>
</tr>
    

    {registro.map((item)=> (
        <tr key={item.id}>
        <td>{item.nombre}</td>
        <td>{item.correo}</td>
        <td>{item.contrasena}</td>
        <td>{item.confirmacion}</td>

        
      
      
      
        <td>
        <Button
            className='button is-primary'
              
                >
                    Modificar
            </Button>


            <Button
                        className='button is-danger'
                        onClick={()=>EliminarRegistro(item.id)}
            
            
            >
                Eliminar
            </Button>
        </td>
        </tr>

        
    
    ))}

    <br>
    </br>
    
    </table>
    </div>
    </div>

    <div>
       <br></br>
       <font face="Arial" size="7" color="black">Recuperacion Contraseña</font>



       <div class="table-responsive">
<table class="table">
  
    <tr>
    
      <th >Correo</th>
     
     
     
 
      <th >#</th>
</tr>
    

    {recuperacion.map((item)=> (
        <tr key={item.id}>
        <td>{item.correo}</td>
        
        
      
      
      
        <td>
        <Button
            className='button is-primary'
              
                >
                    Modificar
            </Button>


            <Button
                        className='button is-danger'
                        onClick={()=>EliminarRecuperacion(item.id)}
            
            
            >
                Eliminar
            </Button>
        </td>
        </tr>

        
    
    ))}

    <br>
    </br>
    
    </table>
    </div>
    </div>




    <div>
       <br></br>
       <font face="Arial" size="7" color="black">Prueba</font>



       <div class="table-responsive">
<table class="table">
  
    <tr>
    <th >Nombre_tarjeta</th>
      <th >Numero_tarjeta</th>
      <th >Fecha_vencimiento</th>
      
     
     
 
      <th >#</th>
</tr>
    

    {prueba.map((item)=> (
        <tr key={item.id}>
        <td>{item.nombre_tarjeta}</td>
        <td>{item.numero_tarjeta}</td>
        <td>{item.fecha_vencimiento}</td>

        
      
      
      
        <td>
        <Button
            className='button is-primary'
              
                >
                    Modificar
            </Button>


            <Button
                        className='button is-danger'
                        onClick={()=>eliminarPrueba(item.id)}
            
            
            >
                Eliminar
            </Button>
        </td>
        </tr>

        
    
    ))}

    <br>
    </br>
    
    </table>
    </div>
    </div>



    <br></br>
        <font face="Arial" size="7" color="black">Peliculas</font>

<div class="table-responsive">
<table class="table">
  
    <tr>
     
      <th >nombre</th>
      <th >descripcion</th>   
      <th >archivo</th> 
      <th >#</th>
</tr>
    

    {peliculas.map((item)=> (
        <tr key={item.id}>
        <td>{item.nombre}</td>
        <td>{item.descripcion}</td>
        <td>{item.archivo}</td>
      
        
        <td>
            <Button
            className='button is-primary'
              
                >
                    Modificar
            </Button>

            <Button
            className='button is-danger'
            onClick={()=>EliminarPeliculas(item.id)}  
            >
              Eliminar
            </Button>
        </td>
        </tr>

        
    
    ))}

    <br>
    </br>
    
    </table>
    </div>
   




    </div>
 



);
    }


