import { getGifs } from "../../src/helpers/getGifs"


describe('Pruebas en getGifs()', () => { 
    test('debe de retornar un arreglo de gifs', async () => { 
        const gifs = await getGifs('one Punch')
        // console.log(gifs);
        //verifica que el arrego tenga por lo menos 1 elemento
        expect(gifs.length).toBeGreaterThan(0)

        expect(gifs[0]).toEqual({//dentro del arreglo verifica que resiba un id, title y url
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
 })