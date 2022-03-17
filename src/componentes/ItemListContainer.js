import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {    
    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(false)

        const productos = [{
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
        }]
        const cargarProductos = new Promise((resolve, reject)=> {
            setTimeout(() => {
                if(productos.length === 0) {
                    reject("No hay productos para cargar")
                } else {
                    resolve(productos);
                }
            }, 2000);
        })

        useEffect(()=> {
            setLoading(true)
            cargarProductos.then(result => {
                setListaProductos(result)
            }).catch((err)=>{
                console.log("No se pudieron cargar los productos " + err)
            }).finally(()=>{
                setLoading(false)
            })
        }, [])
   
    return (
        <>
            { 
                loading 
                ? <h2>Loading...</h2> 
                : <ItemList listaProductos={listaProductos}/>
            }
        </>
    )
}

export default ItemListContainer