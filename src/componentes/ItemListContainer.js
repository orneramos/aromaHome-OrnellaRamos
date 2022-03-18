import { useEffect, useState } from "react";
import { cargarDatos } from "../helpers/cargarDatos"
import ItemList from "./ItemList";

const ItemListContainer = () => {    
    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(false)

        useEffect(()=> {
            setLoading(true)
            cargarDatos()
            .then(result => {
                setListaProductos(result)
            })
            .catch((err)=>{
                console.log("No se pudieron cargar los productos " + err)
            })
            .finally(()=>{
                setLoading(false)
            })
        }, [])
   
    return (
        <div className="">
            { 
                loading 
                ? <h2>Loading...</h2> 
                : <ItemList listaProductos={listaProductos}/>
            }
        </div>
    )
}

export default ItemListContainer