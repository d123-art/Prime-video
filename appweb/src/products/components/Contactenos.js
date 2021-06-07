import React from 'react'
import {Container, Section, Button} from 'react-bulma-components'

const Contactenos = () =>{
    
    return (

    

        <div className="Contactenos">

        <h1>CONTACTENOS FET</h1>
  <br></br>
        <div className='form'>
  
        <label>Nombre</label>
        <input type="text" name="nombre"/>
  
  
        <label>Email</label>
        <input type="text" name="email"/>

        <label>Telefono</label>
        <input type="text" name="email"/>

        <label>Mensaje</label>
        <input type="text" name="mensaje"/>
  </div>
<br>
</br>
  <button type="button" class="btn btn-primary">Enviar</button>

      </div>

      
    );
}

export default Contactenos