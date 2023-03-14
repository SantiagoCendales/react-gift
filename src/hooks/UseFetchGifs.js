import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const UseFetchGifs = (category) => {

    const [imagesArr, setImagesArr] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImagesArr(newImages);
    }

    useEffect( () => {
        getImages();
    }, [ ]);

    return {
        images: imagesArr,
        isLoading: imagesArr.length === 0
    }
}
