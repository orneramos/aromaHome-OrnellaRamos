import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

const Item = (props) => {
    let {tipoProducto, fragancia, precio, imgURL} = props
    return (
        <div>
            <Card style={{ width: '18rem', margin: '3rem' }}>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{tipoProducto} {fragancia}</Card.Title>
                    <Card.Text> $
                    {precio}
                    </Card.Text>
                    <ItemCount stock={5} inicial={1}/>
                </Card.Body>
             </Card>
        </div>
    )  
}

export default Item