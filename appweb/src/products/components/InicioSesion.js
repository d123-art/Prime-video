import React from 'react'
import './styles/Login.css';

export default function InicioSesion(){

   

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
  <div class="abs-center">
    <form action="#" class="border p-5   form">
      <div class="form-group">
      <font face="Arial  " size="6" color="black">Iniciar Sesión</font>
      <br></br>
      <br></br>

      <font face="Arial black  " size="2" color="black">Direccion de e-mail o numero de teléfono móvil</font>
        <input type="email" name="email" id="email" class="form-control"/>
      </div>

      <br></br>
      <div class="form-group">
      <font face="Arial black  " for="password" size="2" color="black">Contraseña</font>
      <div class="a-column a-span7 a-text-right a-span-last">
        
              </div>
            
          
        <input type="password" name="password" id="password" class="form-control"/>
        <br>
        </br>
        <a id="auth-fpp-link-bottom" class="a-link-normal" tabindex="3" href="http://localhost:3000/Recuperacion">
          ¿Has olvidado la contraseña?
        </a>
      </div>
      <center>
      <button type="submit" class="button is-warning is-fullwidth">Iniciar Sesion</button>
      </center>
      <br></br>
      <p>
      <font face="Bahnschrift Light   " size="2" color="black">      Al identificarte aceptas nuestras <a href="enlacepagina.html">Condiciones de uso y venta</a>. Consulta nuestro <a href="enlacepagina.html">Aviso de privacidad</a>. y nuestras <a href="enlacepagina.html">Aviso de Cookies</a> y <a href="enlacepagina.html">Aviso sobre publicidad basada en los intereses del usuario</a>.
<br></br>
<br></br>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Recuérdame.<a href="enlacepagina.html">Detalles</a>
  </label>

  <br>
  </br>
  <br>
  </br>
  <center>
  <font face="Arial   " for="password" size="2" color="Gray">¿Eres nuevo en Amazon?</font>
  </center>
<br>
</br>
  <center>
  <div class="dv-button-wrapper">
                <a href="http://localhost:3000/Registro" class="dv-copy-button">
                <center></center>
                <button type="button" class="button is-light is-fullwidth">
                    
                Crea tu cuenta de Amazon
                    
                    </button>
     </a>
  
      </div>
      </center>
</div>
</font>

      </p>
    </form>




    
  </div>
</div>
<br></br>

<br>
</br>


      
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
)
}

