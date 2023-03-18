// rafc
import { useState } from "react"
import { AddCategory, GifGrid } from "./components" //automaticamente encuentra el index.js de las expor


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ])

    const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory)) return //si la categoria existe se sale si no lo agrega
      // categories.push(newCategorie)
      setCategories([newCategory, ...categories ])

      // otra forma
      // setCategories(cat => [...cat, 'valorant'])
    }


  return (
    <>
      {/* titulo */}
      <h1>GifApp</h1>

      {/* input */}
      <AddCategory 
      // setCategories={setCategories}
        onNewCategory={event => onAddCategory(event)}
      />

      {/* listado de gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
          {
            categories.map( category => (
            <GifGrid 
              key={category} 
              category={category}
            />))
          }
      </ol>
              {/* gif item */}
    
    </>
  )
}

