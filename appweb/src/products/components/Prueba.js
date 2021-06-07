import React,{useState,useEffect}  from 'react'
import './styles/Prueba.css';
import clienteAxios from '../../config/axios'
import { useHistory } from 'react-router'


const Prueba=()=>{

  const history=useHistory()
  const[formulario,setFormulario]=useState({
      nombre_tarjeta:'',
      numero_tarjeta:'',
      fecha_vencimiento:''
      
      

  })


  const onSumbmit = async (e) => {
    e.preventDefault()
    const {nombre_tarjeta,numero_tarjeta,fecha_vencimiento}=formulario
    if(nombre_tarjeta==''|| numero_tarjeta==''|| fecha_vencimiento=='' ){

    }
    else{
      await clienteAxios.post('/prueba/api/agregar',{nombre_tarjeta,numero_tarjeta,fecha_vencimiento})
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

        
<div className="navball">
   

   
<nav class="navbarll" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="tem-img" href="http://localhost:3000/Inicio">
      <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/prime_negative-v1._CB485946247_.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" class="    tem-img" width="100" height="110"/>
    </a>
<br>
</br>
<br></br>
<br></br>
<div class="titullo">
    <font face="Arial " size="5" color="white">Disfruta del contenido ; cancela en cualquier momento</font><br></br>
  
    <font face="Arial " size="6" color="white">Empieza tu prueba gratis de 7 días</font><br></br>

</div>
  </div>
  </nav>


<br></br>
<br></br>



<div class="alert alert-success d-flex align-items-center" role="alert">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
</svg>

  <div>
  <font face="Arial " size="5" color="black">Se aplican restricciones de pago locales para este país/región</font><br></br>
    <p>La tarjeta de crédito debe haberse emitido desde un banco de colombia</p>
   
  </div>
</div>
<br>
</br>
<div class="texto">
<font face="Arial" size="5" color="black">Agrega un método de pago</font><br></br>

</div>

<div class="texto2">
<font face="Arial" size="4" color="black">Tarjetas de pago</font><br></br>
</div>

<div class="imge">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kjwfBAT9T3Hz7aOg-VgnuPzuEWCJ1HSyFg&usqp=CAU"/>
</div>

<div class="texto3">
<font face="Arial" size="2" color="black">Amazon acepta las tarjetas principales</font><br></br>
</div>

<div class="texto4">
<font face="Arial" size="2" color="black">Indica la informacion de la tarjeta</font>
</div>


<center>
  <div className="container">
<form onSubmit={onSumbmit}>
<div class="row g-3">
  <div class="col-md-3">
    <label for="inputEmail4" class="form-label">Nombre de la tarjeta</label>
    <input type="text" class="form-control" name="nombre_tarjeta" onChange={onChange}/>
  </div>
  <div class="col-md-3">
    <label for="inputPassword4" class="form-label" >Numero de tarjeta</label>
    <center>
    <input type="text" class="form-control" name="numero_tarjeta"  onChange={onChange}/>
    </center>
  </div>
  <div class="col-md-3">
    <label for="inputPassword4" class="form-label">Fecha de vencimiento</label>
    <input type="date" class="form-control" name="fecha_vencimiento" onChange={onChange}/>
  </div>

  <div class="col-md-3">
  <button type="submit" class="btn btn-primary">Añade tu tarjeta</button>
  </div>
  </div>
  </form>
  </div>
  </center>


<br>
</br>
<br>
</br>
<br></br>


<div id="footercampaign" class="pag">
<br></br>
<br>
</br>
<br>
</br>
    <center>
        <div class="imagenes">
<img class="dv-footer-logo" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png" alt="Amazon"/>
</div>
    </center>

</div>

</div>





  )
  }

  export default  Prueba