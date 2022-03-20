import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = (props) => {
    let {nombre, fragancia, precio, imgURL, id} = props
    return (
        <div>
            <Card style={{ width: '18rem', margin: '3rem' }}>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{nombre} {fragancia}</Card.Title>
                    <Card.Text> $
                    {precio}
                    </Card.Text>
                    <Link className="btn btn-secondary" to={`/detail/${id}`}>Ver Producto</Link>{' '}
                </Card.Body>
             </Card>
        </div>
    )  
}

export default Item