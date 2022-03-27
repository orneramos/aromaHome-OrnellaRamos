import { BsTrash } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartItem = ({itemProps}) => {
    const carritoContext = useContext(CartContext)
    return(
        <div>
            <h1>Item {itemProps.item.nombre} {itemProps.item.fragancia}</h1>
            <p>{itemProps.quantity} unidades X $ {itemProps.item.precio}</p>
            <Button variant="outline-danger" onClick={()=>carritoContext.removeItem(itemProps.item.id)}> <BsTrash /> </Button>
        </div>
    )
}