import React,{useState,useEffect} from 'react'
/*import { getProducts } from '../services'

export default function ListProduct(){

    const[products, setProducts] = useState([])


    useEffect(() => {
        async function loadProducts(){
            const datos =await getProducts(); 
            console.log(datos);

            if(datos.status === 200){
                setProducts(datos.data.productos);
            }
        }
        loadProducts();
        
    }, []);





    return(
        <div>
             {
                 products.map((item) => (
                     <div key={item.id_productos}>
                    <h3>
                        {item.nombre_producto}
                    </h3>

                    <p>{item.precio}</p>
                     </div>
                 ) )
             }
        </div>
    )
}*/