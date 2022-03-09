import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

const Item = (props) => {
    let {nombreProducto, precio, imgURL} = props
    return (
        <Card style={{ width: '18rem', margin: '3rem' }}>
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
            <Card.Title>{nombreProducto}</Card.Title>
            <Card.Text> $
            {precio}
            </Card.Text>
            <ItemCount stock={5} inicial={1}/>
        </Card.Body>
        </Card>
    )  
}

export default Item