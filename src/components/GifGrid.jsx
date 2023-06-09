import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { UseFetchGifs } from "../hooks/UseFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    const {images, isLoading} = UseFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem key={img.id}
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}
