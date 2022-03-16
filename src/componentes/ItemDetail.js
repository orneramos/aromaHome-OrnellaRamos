
const ItemDetail = ({productDetail}) => {
    return(
        <div className="container">
            <h1>{productDetail.tipoProducto} {productDetail.fragancia}</h1>
            <div className=" d-flex">
                <img src={productDetail.imgURL} alt="imagen" width={400}></img>
                <div className="container">
                    <p>{productDetail.linea}</p>
                    <p>{productDetail.descripcion}</p>
                    <p>$ {productDetail.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail