import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {CartItem} from "./CartItem"
import {Button} from "react-bootstrap"

const Cart = () => {
    const carritoContext = useContext(CartContext)

    return(
        <div className="container">
            { 
                carritoContext.productosEnCarrito.map((producto) => {
                    return <CartItem key={producto.item.id} itemProps={producto}/> 
                })
            }
            <div className="m-5 d-flex justify-content-around">
                <Button variant="outline-danger" onClick={carritoContext.clear}>Vaciar carrito</Button>
                <Button variant="success">Finalizar compra</Button>
            </div>
        </div>
    )
}

export default Cart