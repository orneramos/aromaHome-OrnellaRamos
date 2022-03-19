import Item from "./Item"

function ItemList({listaProductos}) {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {listaProductos.map((producto, i )=> {
                return <Item key={i} categoria={producto.categoria} fragancia={producto.fragancia} precio={producto.precio} imgURL={producto.imgURL} nombre={producto.nombre}/>
            })}
        </div>
    )
}

export default ItemList