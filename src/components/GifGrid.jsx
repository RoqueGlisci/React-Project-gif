//rafc 
import { PropTypes } from "prop-types";
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)

  return (
    <>
        <h4>{category}</h4>

        {
            // si isLoading esta en falso aprarece cargando
            isLoading && <h2>Cargando...</h2>
        }

        <div className="card-grid">
            {
                /*el map busca las imagenes por el id y luego extrae el titulo, se puede desestructura en {id, title}
                se puede usar el operador (...)*/
                images.map( image => (
                    <GifItem 
                        key={image.id}
                        { ...image }
                    />
                ))
            }
        </div>

    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}