import { Button } from "react-bootstrap"
import { useState } from "react"

const ItemCount = ({inicial, stock}) => {
    const [cantidad, setCantidad] = useState(inicial)
    const agregar = () => {
        console.log(`${cantidad} unidades del producto elegido fueron agregadas al carrito`)
    }
    const sumar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad + 1) 
        } 
    }
    const restar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div>
                <Button variant="light" onClick={restar}>-</Button>{' '}
                <span>{cantidad}</span>
                <Button variant="light" onClick={sumar}>+</Button>{' '}
            </div>
            <Button variant="secondary" onClick={agregar}>Agregar al carrito</Button>{' '}
        </>
    )
}

export default ItemCount

