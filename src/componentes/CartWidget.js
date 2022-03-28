import { Button } from 'bootstrap';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const CartWidget = (totalItems) => {
    const carritoContext = useContext(CartContext)
    return(
        <div>
           <FaShoppingCart />
            <span className='m-1'>{carritoContext.totalItems}</span>
        </div>
    )
}

export default CartWidget