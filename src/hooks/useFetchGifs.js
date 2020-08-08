import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
   
    const [state, setstate] = useState({
        data: [],
        loading: true
    }); // el estado inicial es un objeto con
    //un arreglo vacío (data) y un loading que va
    // a estar cargando por defecto

    useEffect( () => { //los efectos no pueden ser async 
                        //pq esperan algo síncrono

        getGifs(category)
            .then ( imgs => {


                setstate({
                    data: imgs,
                    loading: false
                });
                  

                   
            }) 
    
    }, [category])

 

    return state; // retornamos el objeto (lo que se encuentra
                    // dentro del useState), es decir, devuelve: 
                    // {data:[], loading: true}
}
