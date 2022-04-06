import { BsTrash } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartItem = ({itemProps}) => {
    const carritoContext = useContext(CartContext)
    return(
        <div>
            <li className="list-group-item d-flex justify-content-between">
                <p className='col-lg-7'>Item {itemProps.item.nombre} {itemProps.item.fragancia}</p>
                <p className='col-lg-3'>{itemProps.quantity} x $ {itemProps.item.precio}</p>
                <Button variant="outline-danger" className="col-lg-2" onClick={()=>carritoContext.removeItem(itemProps.item.id, itemProps.quantity)}> <BsTrash /> </Button>
            </li>
        </div>
    )   
}