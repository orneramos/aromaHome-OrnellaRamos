import ItemCount from "./ItemCount"
import {useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    const [stock, setStock] = useState(item.stock)

    const carritoContext = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        setStock([stock - quantityToAdd])
        carritoContext.addItem(item, quantityToAdd)
    }

    return(
        <div className="container m-5">
            <h1>{item.nombre} {item.fragancia}</h1>
            <div className=" d-flex">
                <img src={item.imgURL} alt="imagen" width={400} className="img-fluid"></img>
                <div className="container">
                    <p>Linea {item.linea}</p>
                    <p>{item.descripcion}</p>
                    <p>$ {item.precio}</p>
                    <ItemCount 
                        inicial={1}
                        stock={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad} 
                        onAdd={onAdd}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail