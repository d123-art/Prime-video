import React,{useState} from 'react'
import { useHistory } from 'react-router'


const FormModal =()=>{



    const history = useHistory()
    const [formulario, setFormulario]=useState({

        nombre:'',
        correo:'',
        contrasena:'',
        confirmacion:''
    })

    const onSubmit =async(e)=>{
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
}