// rafc

import { useState } from "react"

//el setCategories entra por props desestructurado
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    //para escribir en el buscador 
    // const onInputChange = (event) => {
    //     setinputValue(event.target.value)
    // }
    // otra forma
    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }

    //cundo se pulsa enter se dispara el evento
    const onSubmit = ( event ) => {
        event.preventDefault()
        //trim( ) elimina los espacios en blanco en ambos extremos del string. 
        //para que no se repita la enumeracion de la lista
        if(inputValue.trim().length <= 1) return
        onNewCategory(inputValue.trim())

        //se hace un callback y desestructura para que al agregar un nuevo elemento no se reinicie los anteriores
        // setCategories(categories => [inputValue, ...categories])
        setinputValue('')//borra lo que escribimos en el buscador
    }

    //para escribir en el buscador
  return (
    // se maneja el formulario para inviar la informacion que hay en el inputValue
    // <form onSubmit={(event) => onSubmit(event)}> otra forma
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gif"
            value={ inputValue }
            // onChange={ (event) => onInputChange(event) }
            // otra forma
            onChange={ onInputChange }
        />
    </form>
    
  )
}
