import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {CartItem} from "./CartItem"
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom"

const CartDetail = () => {
    const carritoContext = useContext(CartContext)
    return(
        <div className="col-md-6 col-lg-5 order-md-last">
            <h3>Detalle de compra</h3>
            {/* lista de productos en carrito */}
            <ul className="list-group">
                { 
                    carritoContext.productosEnCarrito.map((producto) => {
                        return <CartItem key={producto.item.id} itemProps={producto}/> 
                    })
                }
            </ul>
            {/* total carrito */}
            <div className="fs-4 m-2 text-center">
                    <p>Total: $ {carritoContext.calcularPrecioTotal()}
                    </p>
                </div>
            {/* buttons */}
            <div className="justify-content-between d-flex mt-2">
                <Link className="btn btn-outline-secondary" to="/">Seguir comprando</Link>{' '}
                <Button variant="outline-danger" onClick={carritoContext.clear}>Vaciar carrito</Button>
            </div>

        </div>
    )
}

export default CartDetail