import { Button, Card } from 'react-bootstrap'

const Item = (props) => {
    let {categoria, fragancia, precio, imgURL} = props
    return (
        <div>
            <Card style={{ width: '18rem', margin: '3rem' }}>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{categoria} {fragancia}</Card.Title>
                    <Card.Text> $
                    {precio}
                    </Card.Text>
                    <Button variant="secondary">Ver Producto</Button>{' '}
                </Card.Body>
             </Card>
        </div>
    )  
}

export default Item