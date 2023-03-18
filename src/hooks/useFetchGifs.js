//hooks es una funcion que retorna algo

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)//cuando recibe las imagenes cambia a falso. React18 solo dispara 1 render
    }

    //el useEffect no retorna promesas
    useEffect( () => {
        getImages()
        
    }, [])

    // let x = images[0]
    // console.log(x.title);


  return {
    images,
    isLoading
  }
}
