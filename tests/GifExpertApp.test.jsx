import { GifExpertApp } from "../src/GifExpertApp"
import { render, screen } from "@testing-library/react";


describe('Pruebas en GifExpertApp', () => {

    test('should', () => {
        //solo hay que testear el onAddCategory
        render(<GifExpertApp/>)
        screen.debug()

    })

})