import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    
    const {data:images, loading} = useFetchGifs(); //renombramos data a images
 
    return (
        <>
            <h2 className='animate__animated animate__fadeIn'>{category}</h2>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }
            
            <div className="card-grid">
            
                <ol>
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img }
                                />
                        ))
                    }
                </ol>

            </div>
        </>
    )
}
