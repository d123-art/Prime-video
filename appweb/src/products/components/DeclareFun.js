import React,{useState, useEffect} from 'react'

const DeclareFun =() =>{

    const [cuenta, setCuenta]= useState(0);

    useEffect(() => {

        console.log('la cuenta es ${cuenta}');
        document.titl='La cuenta es ${cuenta}';
        

    })
    

    return(

        <div>
            La cuenta es:{cuenta}

            <button
                
                OnClick={()=>setCuenta(cuenta +1)}
            />
        </div>
    )
}

export default DeclareFun