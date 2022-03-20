import { Button } from 'react-bootstrap'
import ItemCount from "./ItemCount"

const ItemDetail = ({nombre, fragancia, precio, imgURL, linea, descripcion, stock}) => {
    return(
        <div className="container m-5">
            <h1>{nombre} {fragancia}</h1>
            <div className=" d-flex">
                <img src={imgURL} alt="imagen" width={400} className="img-fluid"></img>
                <div className="container">
                    <p>Linea {linea}</p>
                    <p>{descripcion}</p>
                    <p>$ {precio}</p>
                    <ItemCount stock={stock} inicial={1}/>
                    <Button variant="secondary">Agregar al carrito</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail