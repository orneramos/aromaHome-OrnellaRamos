import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {CartItem} from "./CartItem"
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom"

const Cart = () => {
    const carritoContext = useContext(CartContext)
    
    const totalCarrito = () => {
        let total = 0
        carritoContext.productosEnCarrito.map(producto => 
           total += producto.quantity * producto.item.precio
        )
        return total
    }
    
    return (

        carritoContext.productosEnCarrito.length > 0 ?

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
                <h3>Total: $ {totalCarrito()}
                </h3>
                <Button variant="success">Finalizar compra</Button>
            </div>
        </div>

        : 

        <div className="m-5 text-center">
            <h2>Su carrito esta vacio</h2>
            <Link to="/" className="btn btn-success">Ver productos</Link>
        </div>
        
    )
}

export default Cart