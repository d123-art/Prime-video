import React,{useState} from 'react'

import { useHistory } from 'react-router'
import clienteAxios from '../../config/axios'
import './styles/Login.css';

export default function Registro (){



  const history=useHistory()
  const[formulario,setFormulario]=useState({
      nombre:'',
      correo:'',
      contrasena:'',
      confirmacion:''
      
  })


  const onSumbmit = async(e)=>{
    e.preventDefault()
    const {nombre,correo,contrasena,confirmacion} = formulario
    if(nombre ==''||  correo ==''|| contrasena ==''|| confirmacion =='' ){

    }
    else{
      await clienteAxios.post('/registro/api/agregar',{nombre,correo,contrasena,confirmacion})
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
  <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"   width="150" height="150" alt="..."/>
  

</center> 


<br></br>
<br></br>

<div class="container">
<form onSubmit={onSumbmit}>
  <div class="abs-center">
    <div action="#" class="border p-5   form">
      <div class="form-group">
      <font face="Arial  " size="6" color="black">Crear Cuenta</font>
      <br></br>
   <br></br>

      <font face="Arial black  " size="2" color="black">Nombre</font>
        <input type="text" name="nombre"  class="form-control"  onChange={onChange} />
      </div>

      <br></br>
      

      <font face="Arial black  " size="2" color="black">Correo Electronico</font>
        <input type="email" name="correo"  class="form-control"  onChange={onChange} />
      
        <br></br>
      

      <font face="Arial black  " size="2" color="black">Contraseña</font>
        <input type="password" placeholder="Al menos 6 caracteres" name="contrasena"  class="form-control"  onChange={onChange} />
        <font face="Bahnschrift Light   " size="2"  color="black">La contraseña debe tener 6 caracteres como mínimo.</font>

<br></br>
<br></br>
        <font face="Arial black  " size="2" color="black">Confirma tu contraseña</font>
        <input type="password"  name="confirmacion"  class="form-control"  onChange={onChange} />
      
<br></br>
      <center>
      <button type="submit" class="button is-warning is-fullwidth">Crea tu cuenta de Amazon</button>
      </center>
   <br></br>
  

   <font face="Bahnschrift Light   " size="2" color="black">      Al identificarte aceptas nuestras <a href="enlacepagina.html">Condiciones de uso y venta</a>. Consulta nuestro <a href="enlacepagina.html">Aviso de privacidad</a>. y nuestras <a href="enlacepagina.html">Aviso de Cookies</a> y <a href="enlacepagina.html">Aviso sobre publicidad basada en los intereses del usuario</a>.
</font>


<br></br>
<br></br>
<br></br>
<br></br>

<font face="Bahnschrift Light   " size="2"  color="black">¿Ya tienes una cuenta? <a href="http://localhost:3000/InicioSesion">Iniciar Sesion</a>.</font>

</div>


</div>

<br></br>


</form>
</div>

      
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


<div class="container">


<p class="text-center">© 1996-2021, Amazon.com, Inc. o afiliados. Todos los derechos reservados.y </p>



</div>

</footer>

</div>


       
       
    );
}

