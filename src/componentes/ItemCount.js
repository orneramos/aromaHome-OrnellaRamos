import { Button } from "react-bootstrap"
import { useState } from "react"

const ItemCount = ({inicial, stock}) => {
    const [cantidad, setCantidad] = useState(inicial)
    const [disabled, setDisabled] = useState(false)
    const agregar = () => {
        console.log(`${cantidad} unidades del producto elegido fueron agregadas al carrito`)
    }
    const sumar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad + 1) 
        } else {
            setDisabled(true)
        }
    }
    const restar = () => {
        setDisabled(false)
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
            <Button variant="secondary" onClick={agregar} disabled={disabled}>Agregar al carrito</Button>{' '}
        </>
    )
}

export default ItemCount

