import React ,{Fragment}from 'react';
import{

  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
}from "react-router-dom";
import Inicio from './products/components/Inicio';
import Mensaje from './products/components/Mensaje';
import Registro from './products/components/Registro';
import InicioSesion from './products/components/InicioSesion';
import Admin from './products/components/Admin';
import Suscripcion from './products/components/Suscripcion';
import Preguntas from './products/components/Preguntas';
import Prueba from './products/components/Prueba';
import Comentario from './products/components/Comentario';
import Recuperacion from './products/components/Recuperacion';
import Peliculas from './products/components/Peliculas';
import  '../src/App.css'
import Suscripción from './products/components/Suscripcion';




function App(){


  return(


   <Router>
      
    <div className="container">
     
      <hr />
      <Switch>
      <Route path="/InicioSesion"exact>

    <InicioSesion />

</Route>



<Route path="/Recuperacion"exact>

    <Recuperacion />

</Route>



<Route path="/Prueba"exact>

    <Prueba />

</Route>




<Route path="/Peliculas"exact>

    <Peliculas />

</Route>




<Route path="/Comentario"exact>

    <Comentario />

</Route>


<Route path="/Inicio"exact>

<Inicio />

</Route>


  
<Route path="/Suscripcion"exact>

<Suscripcion />

</Route>

      

       






       

        <Route path="/Mensaje">

        <Mensaje />




        </Route>
        <Route path="/Preguntas">

<Preguntas />




</Route>


        <Route path="/Registro">

        <Registro />

        </Route>





        

        <Route path="/Admin">

        <Admin/>

        </Route>



      

        
      </Switch>
      </div>
      <br>
      </br>
      



</Router>

    
  );
}

export default App;