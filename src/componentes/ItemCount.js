import { Button } from "react-bootstrap"

const ItemCount = ({inicial, stock, onAdd, cantidad, setCantidad}) => {

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
    const reset = () => {
        setCantidad(inicial)
    }

    return (
        <>
            <div>
                <Button variant="light" onClick={handleRestar} disabled={stock==0}>-</Button>{' '}
                <span className="m-3">{cantidad}</span>
                <Button variant="light" onClick={handleSumar} disabled={stock==0}>+</Button>{' '}
                <Button variant="secondary" className="d-block mt-2" disabled={stock==0} onClick={()=>{onAdd(cantidad); reset()}}>Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount

