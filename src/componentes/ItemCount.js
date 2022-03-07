import { Button } from "react-bootstrap"
import { useState } from "react"

const ItemCount = ({inicial, stock, agregar}) => {
    const [cantidad, setCantidad] = useState(inicial)
    const sumar = () => {
        if(cantidad < stock)
        setCantidad(cantidad + 1) 
    }
    const restar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    return (
        <div>
            <div className="mt-3">
                <Button variant="light" onClick={restar}>-</Button>{' '}
                <span>{cantidad}</span>
                <Button variant="light" onClick={sumar}>+</Button>{' '}
            </div>
            <Button className="mt-2" variant="secondary" onClick={agregar}>Agregar al carrito</Button>{' '}
        </div>
    )
}

export default ItemCount