import React,{useState,useEffect} from 'react'
import './styles/Comentario.css';
import {Nav}from 'react-bootstrap'
import clienteAxios from '../../config/axios'
import { useHistory } from 'react-router'


export default function Comentario(){

  const history=useHistory()
  const[formulario,setFormulario]=useState({
      correo:'',
      problema:''
     
      
      

  })


  const onSumbmit=async(e)=>{
    e.preventDefault()
    const {correo,problema}=formulario
    if(correo==''||problema=='' ){

    }
    else{
      await clienteAxios.post('/mensaje/api/agregar',{correo,problema})
      history.push('/')

    }
  }

  const onChange=(e)=>{
    setFormulario({
        ...formulario,
        [e.target.name]:e.target.value
    })
}

 


    return(
        
<div className="menu">
   <body id="body"></body>




   <nav class="navbar" role="navigation" aria-label="main navigation">

<div class="navbar-brand">
  <a class="navbar-item" href="http://localhost:3000/Inicio">
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="110" height="150"/>
  </a>

  
</div>

<a class="" href="http://localhost:3000/InicioSesion">
<a class="" href="http://localhost:3000/InicioSesion">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" color="white" class="bi bi-globe" viewBox="0 0 16 16">
<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>

</svg>
<label>

<div class="dropdown">
<button class="btn btn" type="button"color="white" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
<font face="Arial  " size="3" color="white">ES

</font>
</button>
</div>


</label>
<label>



</label>
</a>
</a>
</nav>

<br>
</br>



<div class="holi">
    <a class="navbar-brand" >Ayuda</a>
  </div>







<div class="row">
  <div class="col-sm-6">
 
    <form class="row g-3">
  <div class="col-auto">
    <div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#list-item-1">Configuracion</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Solucion de problemas</a>
  <a class="list-group-item list-group-item-action" href="#list-item-3">Accesibilidad</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Dispositivos Compatibles</a>
  <a class="list-group-item list-group-item-action" href="#list-item-1">Prime Video Channels</a>
  <a class="list-group-item list-group-item-action" href="#list-item-1">Alquilar y comprar en Prime Video</a>
  <a class="list-group-item list-group-item-action" href="#list-item-1">Avisos y polílitas legales</a>
  <a class="list-group-item list-group-item-action" href="#list-item-1">Ver todos los temas de Ayuda</a>
  <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Buscar en Ayuda" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
</div>
</div>
</form>
 
  </div>



  <br>
  </br>
  <br></br>
 
    <br></br>
    <br></br>
    <form onSubmit={onSumbmit}>
  <div class="row g-3">

  <div class="col">
  <label for="formGroupExampleInput" class="form-label">Correo Electronico</label>
    <input type="text" class="form-control" name="correo" aria-label="First name"  onChange={onChange}/>
  </div>
  <div class="col">
  <label for="formGroupExampleInput" class="form-label">Cuentanos tu problema</label>
    <input type="text" class="form-control"  name="problema" aria-label="Last name"  onChange={onChange}/>
  </div>
</div>
 <br></br>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>

</div>
 
</div>




 











    )
}
