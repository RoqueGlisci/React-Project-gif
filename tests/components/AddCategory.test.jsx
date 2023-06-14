import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Prueba en <AddCategory />', () => { 

    test('debe de cambiar', () => {
        render(<AddCategory onNewCategory={ () => { }}/>) //se crea el sujeto de prueba
        //screen.debug()//muestra lo que se esta evaluando
        const input = screen.getByRole('textbox')//se extrae el input

        fireEvent.input(input, { target: {value: 'Saitama'}})//se dispara el evento 

        expect( input.value ).toBe('Saitama');//y se hace la insercion de lo que estamos esperando


    })

   test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn() //es como una funcion fictisia que crea jest

        render( <AddCategory onNewCategory={ onNewCategory } />)//sujeto de prueba

        //se agarran referencia del input y del form
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } });//se dispara el evento 
        fireEvent.submit(form)

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled()//se evalua que la funcion jest.fn() halla sido llamada 
        expect(onNewCategory).toHaveBeenCalledTimes(1) //revisa que solo se llame 1 vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) //esta evaluando el input que se llame con el nombre 'Saitama'

   })

   test('no llamar el onNewCategory si el input esta vacio', () => {
        //verifica que el form este vasio para no llamar al onNewCategory 
        const onNewCategory = jest.fn() //es como una funcion fictisia que crea jest

        render( <AddCategory onNewCategory={ onNewCategory } />)//sujeto de prueba

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0) //revisa que solo se llame 0 veses 
    })
 })