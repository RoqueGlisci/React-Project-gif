import { GifGrid } from "../../src/components/GifGrid"
import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')//se realica una funcion fictica tomando el custon hooks

describe('pruebas en <GifGrid/>', () => { 
    const category = 'one punch'

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true //se coloca true para que el loading aparesca en el test
        })

        render( <GifGrid category={category}/>)
        // screen.debug() //se va el componente en su parte inicial a evaluar
        expect(screen.getByText('Cargando...'))//elemento cargando a evaluar
        expect(screen.getByText(category))//se evalua la categorya
    })

    test('debe de mostrar el item cuando se cargan las imagenes useFetchGifs', () => {
        //para evaluar la imagen se tiene que crear una data ficticia la estructura como id, title y url no se modifica 
        const gifs =[
            {
                id: 'asdf',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'a123',
                title: 'pepe',
                url: 'https://localhost/pepe.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)

    })
 })