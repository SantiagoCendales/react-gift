import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const ApiKey = 'ZgCkt6s7PNs5fcNx0yJMBDioxm3xijDl';

export const GifApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    const addCategory = (newCategory) => {

        if(categories.includes(newCategory)) {
            return;
        }

        setCategories([...categories, newCategory]);
    };

    return (
    <>

        <h1>GifApp</h1>

        <AddCategory onNewCategory={addCategory} />

        {
            categories.map(category => (
                    <GifGrid
                    key={category}
                    category={category} />
                )
            )
        }

    </>
)
}
