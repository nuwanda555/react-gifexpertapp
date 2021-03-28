import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

 //   const categorias = ['luis', 'pepe', 'lola','lucas','nico'];

    const [categories, setCategories] = useState(['luis']);
    
    // const handleAdd = () => {
    //     setCategorias([...categorias, 'mario']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2 >
            <AddCategory setCategories={ setCategories }/>
            <hr />


            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </div>
    )
}
