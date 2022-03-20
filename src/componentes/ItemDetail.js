import ItemCount from "./ItemCount"
import { useState } from "react"

const ItemDetail = ({id, nombre, fragancia, precio, imgURL, linea, descripcion, stock}) => {

    const [cantidad, setCantidad] = useState(1)

    function handleAgregar () {
        const itemToCart = {
            id,
            nombre,
            fragancia,
            imgURL,
            precio,
            cantidad
        }
        console.log(`Se han agregado ${cantidad} unidades del producto ${nombre} ${fragancia}`)
    }

    return(
        <div className="container m-5">
            <h1>{nombre} {fragancia}</h1>
            <div className=" d-flex">
                <img src={imgURL} alt="imagen" width={400} className="img-fluid"></img>
                <div className="container">
                    <p>Linea {linea}</p>
                    <p>{descripcion}</p>
                    <p>$ {precio}</p>
                    <ItemCount 
                        stock={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad} 
                        handleAgregar={handleAgregar}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail