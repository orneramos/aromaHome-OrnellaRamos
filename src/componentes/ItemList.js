import Item from "./Item"

function ItemList({listaProductos}) {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {listaProductos.map((producto)=> {
                return <Item key={producto.id} categoria={producto.categoria} fragancia={producto.fragancia} precio={producto.precio} imgURL={producto.imgURL} nombre={producto.nombre} id={producto.id}/>
            })}
        </div>
    )
}

export default ItemList