import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {CartItem} from "./CartItem"
import {Button} from "react-bootstrap"

const Cart = () => {
    const carritoContext = useContext(CartContext)

    return(
        <div className="container mt-5">
            <h2>Tu carrito</h2>
            <ul className="list-group">
                { 
                    carritoContext.productosEnCarrito.map((producto) => {
                        return <CartItem key={producto.item.id} itemProps={producto}/> 
                    })
                }
            </ul>
            <div className="justify-content-end d-flex mt-2">
                <Button variant="outline-danger" onClick={carritoContext.clear}>Vaciar carrito</Button>
            </div>
            <div className="m-5 d-flex justify-content-around">
                <h3>Total: {}</h3>
                <Button variant="success">Finalizar compra</Button>
            </div>
        </div>
    )
}

export default Cart