import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const carritoContext = useContext(CartContext)
    return (
        carritoContext.productosEnCarrito.length > 0 &&
        <div>
           <FaShoppingCart />
            <span className='m-1'>{carritoContext.calcularTotalItems()}</span>
        </div>
    )
}

export default CartWidget