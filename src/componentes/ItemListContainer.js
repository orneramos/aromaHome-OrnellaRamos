import ItemList from "./ItemList";

const ItemListContainer = () => {
    const productos = [
        {
            tipoProducto: "Difusor",
            fragancia: "Sweet Dreams",
            precio: 600,
            imgURL:"../imagenes/difusor.jpg"
        },
        {
            tipoProducto: "Difusor",
            fragancia: "Sandalo dulce",
            precio: 600,
            imgURL:"../imagenes/difusor.jpg"
        }
    ]
    const cargarProductos = new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("¡Éxito!" + productos);
        }, 2000);
    })
    cargarProductos.then(result => {
        console.log(result)
    }).catch((err)=>{
        console.log("No se pudieron cargar los productos" + err)
    })
    return (
        <ItemList productos={productos}/>
    )
}

export default ItemListContainer