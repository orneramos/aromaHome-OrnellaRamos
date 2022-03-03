import { Card, Button } from 'react-bootstrap'

const ItemContainer = (props) => {
    let {nombreProducto, precio, agregar, imgURL} = props
    return (
        <Card style={{ width: '18rem', margin: '3rem' }}>
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
            <Card.Title>{nombreProducto}</Card.Title>
            <Card.Text> $
            {precio}
            </Card.Text>
            <Button variant="primary" onClick={agregar}>Agregar al carrito</Button>
        </Card.Body>
        </Card>
    )  
}

export default ItemContainer