import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import clienteAxios from '../../config/axios'
import {Nav}from 'react-bootstrap'




const Peliculas=()=>{

  const history=useHistory()
  const[formulario,setFormulario]=useState({
      nombre:'',
      descripcion:'',
      archivo:''
      
  })


  const onSumbmit = async(e)=>{
    e.preventDefault()
    const {nombre,descripcion,archivo} = formulario
    if(nombre ==''||  descripcion ==''|| archivo ==''){
   

    }
    else{
      
      await clienteAxios.post('/peliculas/api/agregar',{nombre,descripcion,archivo})
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

        <div>
        <div class="html">
        <html></html>
            
    
       <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://localhost:3000/Inicio">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="110" height="150"/>
        </a>
    
        <Nav.Item>
        <Nav.Link href="http://localhost:3000/Inicio">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="http://localhost:3000/Inicio">Series</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="http://localhost:3000/Inicio">Peliculas</Nav.Link>
      </Nav.Item>
    
      <Nav.Item>
        <Nav.Link href="http://localhost:3000/Inicio">Infantil</Nav.Link>
      </Nav.Item>
      
     
      <div class="demo">
      <form class="form-search">
        <div class="input-group">
          <input class="form-control form-text" maxlength="128" placeholder="Buscar" size="10" type="text" />
        </div>
      </form>
    </div>
    
      </div>
      
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
    
     
          </a>
    </nav>
    
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
</div>    

<div className="container">
<form onSubmit={onSumbmit}>
                <div className="card p-3">
                <div className="row">

                <div className="col-10">
                <font face="Arial black  " size="2" color="black">Nombre</font>
        <input type="text" name="nombre" class="form-control" onChange={onChange}/>

<br>
</br>
        <font face="Arial black  " size="2" color="black">Descripcion</font>
        <input type="text" name="descripcion" class="form-control" onChange={onChange} />


        <br></br>
                <input  className="form-control" name="archivo" type="file" onChange={onChange}/>
        <br></br>
                </div>

                <div className="col-10">
                <button type="submit" className="btn btn-primary col-12">Subir</button>

                </div>
            

                    </div>
                </div>
</form>
                </div>
                </div>
                
    )
}

export default  Peliculas