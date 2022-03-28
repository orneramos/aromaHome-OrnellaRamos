import { BsTrash } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartItem = ({itemProps}) => {
    const carritoContext = useContext(CartContext)
    return(
        <div>
            <li className="list-group-item d-flex justify-content-between">
                <h3>Item {itemProps.item.nombre} {itemProps.item.fragancia}</h3>
                <p>{itemProps.quantity} unidades</p>
                <p>$ {itemProps.quantity * itemProps.item.precio}</p>
                <Button variant="outline-danger" onClick={()=>carritoContext.removeItem(itemProps.item.id)}> <BsTrash /> </Button>
            </li>
        </div>
    )   
}