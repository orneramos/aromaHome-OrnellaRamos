import CartDetail from "./CartDetail"
import Form from "./Form"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {    
    const carritoContext = useContext(CartContext)
    return (
        carritoContext.productosEnCarrito.length > 0 ?
        <div className="container row g-5 m-3">
            <CartDetail />
            <Form />
        </div>
        : 
        <div className="m-5 text-center">
            <h2>Su carrito esta vacio</h2>
            <Link to="/" className="btn btn-success">Ver productos</Link>
        </div>
    )
}

export default Cart