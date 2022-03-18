import Item from "./Item"

function ItemList({listaProductos}) {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {listaProductos.map((producto, i )=> {
                return <Item key={i} tipoProducto={producto.tipoProducto} fragancia={producto.fragancia} precio={producto.precio} imgURL={producto.imgURL}/>
            })}
        </div>
    )
}

export default ItemList