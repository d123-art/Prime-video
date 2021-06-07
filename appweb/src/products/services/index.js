
import axios from 'axios'

const baseUrl_recuperacion= process.env.REACT_APP_BASE_URL 

export async function getRecuperacion() {
    try{


        const response = await axios({
            url:`${baseUrl_recuperacion}/api/listarRecuperacion`,
            method:'GET'


        });

        return response
    
    } catch(e){
        console.log(e);

    }
}





const baseUrl_prueba= process.env.REACT_APP_BASE_URL 

export async function getPrueba() {
    try{


        const response = await axios({
            url:`${baseUrl_prueba}/api/listarPrueba`,
            method:'GET'


        });

        return response
    
    } catch(e){
        console.log(e);

    }
}









const baseUrl_peliculas= process.env.REACT_APP_BASE_URL 

export async function getPeliculas() {
    try{


        const response = await axios({
            url:`${baseUrl_peliculas}/api/listarPeliculas`,
            method:'GET'


        });

        return response
    
    } catch(e){
        console.log(e);

    }
}












const baseUrl_mensaje= process.env.REACT_APP_BASE_URL 

export async function getMensaje() {
    try{


        const response = await axios({
            url:`${baseUrl_mensaje}/api/listarMensaje`,
            method:'GET'


        });

        return response
    
    } catch(e){
        console.log(e);

    }
}









const baseUrl_registro= process.env.REACT_APP_BASE_URL 

    export async function getRegistro() {
        try{
    
    
            const response = await axios({
                url:`${baseUrl_registro}/api/listarRegistro`,
                method:'GET'
    
    
            });
    
            return response
        
        } catch(e){
            console.log(e);
    
        }
    

    

}










