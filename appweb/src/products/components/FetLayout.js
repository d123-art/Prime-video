import React from 'react'
import CompoA from './CompoA'
import CompoB from './CompoB'
import CompoC from './CompoC'
import Contactenos from './Contactenos'


const FetLayout = () =>{

     return (

      <>

        <CompoA  title="Componente 1" />

        <CompoB title="Componente 2" />

        <CompoC title="Componente 3" />

        <Contactenos  />


        </>
     )
}

export default FetLayout