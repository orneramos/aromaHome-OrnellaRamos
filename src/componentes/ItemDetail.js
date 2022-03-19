import { Button } from 'react-bootstrap'
import ItemCount from "./ItemCount"

const ItemDetail = ({productDetail}) => {
    return(
        <div className="container">
            <h1>{productDetail.tipoProducto} {productDetail.fragancia}</h1>
            <div className=" d-flex">
                <img src={productDetail.imgURL} alt="imagen" width={400} className="img-fluid"></img>
                <div className="container">
                    <p>{productDetail.linea}</p>
                    <p>{productDetail.descripcion}</p>
                    <p>$ {productDetail.precio}</p>
                    <ItemCount stock={productDetail.stock} inicial={1}/>
                    <Button variant="secondary">Agregar al carrito</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail