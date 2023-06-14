import { GifItem } from "../../src/components/GifItem"
import { render, screen } from "@testing-library/react"


describe('Prueba an GifItem', () => {

    const title = 'Saitama'
    const url = 'http://one-punch.com/sitama.jpg'

    test('debe de hacer match con el snapshot', () => {
        const{container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url}/>)

        //para no hacer 2 expect se puede desestructurar
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        //se desestructura 
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('debe de mostrar el titulo en el component', () => {
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })

})