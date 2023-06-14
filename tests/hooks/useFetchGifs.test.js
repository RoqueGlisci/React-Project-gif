import { useFetchGifs } from "../../src/hooks/useFetchGifs"
import { renderHook, waitFor } from "@testing-library/react";


describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {
        // se crea un callback para llamar al useFetchGifs. a demas hay que pasar la categoria dentro de useFetchGifs
        const { result } = renderHook(() => useFetchGifs('One punch'))
        // console.log(result); //se captura el resultado que hay en useFetchGifs
        const {images, isLoading} = result.current //se desestructura el result

        expect(images.length).toBe(0)//su estado inicial es 0 no va acontener ninguna imagen
        expect(isLoading).toBeTruthy() //comprueca que este en true
    })

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        // se crea un callback para llamar al useFetchGifs. a demas hay que pasar la categoria dentro de useFetchGifs
        const { result } = renderHook(() => useFetchGifs('One punch'))
        // console.log(result); //se captura el resultado que hay en useFetchGifs
        //hay que esperar que el hook se ejecute. se evalua el proceso de carga de imagenes del getImages por ser asincrona 
        await waitFor(//se mada la orden de que espera hasta que (result.current.images.length) sea mayor a 0
            //se usa una exprecion dejes para evaluar la asincronia. Espera a que la condicion del expect se cumpla
            () => expect(result.current.images.length).toBeGreaterThan(0) //result.current.images.length tiene que se mayor a 0
            
        )
        const {images, isLoading} = result.current //se desestructura el result

        expect(images.length).toBeGreaterThan(0)//su estado inicial es 0 no va acontener ninguna imagen
        expect(isLoading).toBeFalsy() //comprueca que este en true
    })

})