import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)

    const carritoContext = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        carritoContext.addItem(item, quantityToAdd)
    }

    var cantidadEnCarrito = 0
    if (carritoContext.productosEnCarrito.length > 0) {
        const itemEnCarrito = carritoContext.productosEnCarrito.find(producto => producto.item.id === item.id)
        if (itemEnCarrito) {
            cantidadEnCarrito = itemEnCarrito.quantity
        }
    }

    const stockRestante = item.stock - cantidadEnCarrito;

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
                        cantidad={cantidad} 
                        setCantidad={setCantidad}
                        onAdd={onAdd}  
                        stockRestante={stockRestante}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail