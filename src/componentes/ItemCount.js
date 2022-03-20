import { Button } from "react-bootstrap"

const ItemCount = ({stock, handleAgregar, cantidad, setCantidad}) => {

    const handleSumar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad + 1) 
        } 
    }
    const handleRestar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div>
                <Button variant="light" onClick={handleRestar}>-</Button>{' '}
                <span>{cantidad}</span>
                <Button variant="light" onClick={handleSumar}>+</Button>{' '}
                <Button variant="secondary" className="d-block mt-2" onClick={handleAgregar}>Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount

