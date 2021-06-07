import React,{useState,useEffect}from 'react'
import './styles/Recuperacion.css';
import clienteAxios from '../../config/axios'
import { useHistory } from 'react-router'


export default function Recuperacion(){

  

  const history=useHistory()
  const[formulario,setFormulario]=useState({
    
      correo:''

  })


  const onSumbmit = async (e) => {
    e.preventDefault()

    const {correo} = formulario
    if (correo==''){

    }
    else{
      await clienteAxios.post('/recuperacion/api/agregar',{correo})
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

  <div className="">
    
 <br>
 </br>
 <br>
 </br>
  <center>
  <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"  width="150" height="150" alt="..."/>
  

</center> 

<br></br>

<div class="container">
<form onSubmit={onSumbmit}>
  <div class="abs-center">
    <div action="#" class="border p-5   form">
      <div class="form-group">
      <font face="Arial  " size="6" color="black">Ayuda de contraseña</font>
      <br></br>
      <br></br>

      <font face="Arial  " size="3" color="black">Introduzca la direccion de correo eléctronico o el número de teléfono movil
      asociados con su cuenta de Amazon.</font>
<br></br>
<br></br>

      <font face="Arial black  " size="2" color="black">E-mail o número de móvil</font>
        <input type="email" name="correo"  class="form-control"  onChange={onChange} />
      </div>

      <br></br>
    
      <center>
      <button type="submit" class="button is-warning is-fullwidth">Continuar</button>
      </center>
   <br></br>
  
</div>


</div>

<br></br>
<div class="text">
<font face="Arial black  " size="3" color="black">¿Has cambiado tu dirección de e-mail o <br></br>número de móvil?</font>
</div>

<br></br>
<div class="text1">
<font face="Arial " size="1" color="black">Si ys no utiliza la direccion de correo electrónico o el 
<br></br> teléfono asociados su cuenta de Amazon,   puede contactar <br>
</br>con atencion al cliente para que le ayuden a recuperar <br></br>
el acceso a su cuenta  </font>
</div>
</form>
</div>


      <br></br>
      <br></br>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"></link>


<footer class="footer">
<center>

<div class="row">
<div class=" col-5    ">
<center>
<font face="Bahnschrift Light   " size="2" color="black"> <a href="enlacepagina.html"> Condiciones de uso </a>

</font>
</center>
</div>


<div class=" col-3  ">

<center>
<font face="Bahnschrift Light   " size="2" color="black"> <a href="enlacepagina.html"> Aviso de privacidad </a> 

</font>
</center>


</div>


<div class=" col-3 ">
<center>
<font face="Bahnschrift Light   " size="2" color="black"> <a href="enlacepagina.html"> Ayuda </a>

</font>
</center>

</div>



</div>

</center>

<br></br>
<div class="container">


<p class="text-center">© 1996-2021, Amazon.com, Inc. o afiliados. Todos los derechos reservados.y </p>



</div>

</footer>

</div>
)
}

