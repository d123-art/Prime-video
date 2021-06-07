import React,{useState,useEffect} from 'react'
import {getMensaje} from '../services/index'
import clienteAxios from '../../config/axios'
import { useHistory } from 'react-router'



export default function Mensaje(){

  const history=useHistory()
  const[formulario,setFormulario]=useState({
      opc_inicial:'',
      opc_final:'',
      contactarnos:'',
      
      

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

   


        <div className="Mensaje">
          <center>
        
        <font face="Arial black" size="7" color="black">¿TIENES ALGUNA DUDA?</font>

</center>
<br>
</br>
<br>
</br>

        <center>
        <img src="https://media3.giphy.com/media/3sbiWejYVIGuX1thyq/giphy.gif" class="rounded float-end figure-img img-fluid rounded border border-5" width="400" height="400" alt="..."/>
        
      
</center> 

                

                <center>
            <p>!Llena este formulario y pronto te comunicaremos!</p>
        </center>

        <br>
        </br>

        

<br>
</br>









<form onSubmit={onSumbmit}>
<div class="row g-3 align-items-center">
  <label class="label">NOMBRES:</label>
  <div class="control">
    <input class="input is-primary is-rounded is-hovered" type="text" name="nombres" onChange={onChange}/>
  </div>
</div>


<br>
</br>

<div class="row g-3 align-items-center">
  <label class="label">APELLIDOS:</label>
  <div class="control">
    <input class="input is-primary is-rounded is-hovered" type="text" name="apellidos" onChange={onChange}/>
  </div>
</div>


<br>
</br>

<div class="row g-3 align-items-center">
  <label class="label">NUMERO DE IDENTIDAD:</label>
  <div class="control">
    <input class="input is-primary is-rounded is-hovered" type="text"name="identidad" onChange={onChange}/>
  </div>
</div>

<br>
</br>

<div class="field">
  <label class="label">EDAD:</label>
  <div class="control">
    <input class="input is-primary is-rounded is-hovered" type="text" name="edad" onChange={onChange}/>
  </div>
</div>


<br>
</br>

<div class="field">
  <label class="label">CORREO ELECTRONICO:</label>
  <div class="control">
  <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="input is-primary is-rounded is-hovered" name="correo" onChange={onChange} />
</div>
  </div>
</div>


<br>
</br>

<div class="field">
  <label class="label">CELULAR:</label>
  <div class="control">
    <input class="input is-primary is-rounded is-hovered" type="text" name="celular" onChange={onChange}/>
  </div>
</div>


<br>
</br>

<div class="field">
  <label class="label">CIUDAD:</label>
  <div class="control">
    <input class="input is-primary is-rounded is-hovered" type="text" name="ciudad" onChange={onChange}/>
  </div>
</div>


<br>
</br>

<div class="field">
  <label class="label">MENSAJE:</label>
  <div class="control">
    <input class="input is-primary is-rounded is-hovered" type="text" name="mensaje" onChange={onChange}/>
  </div>
</div>



<br>
</br>

<button type="submit" class="button is-large is-fullwidth  is-primary is-focused">Enviar</button>
</form>

</div>

);
    }
