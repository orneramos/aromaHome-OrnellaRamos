import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cargarDatos } from "../helpers/cargarDatos"
import ItemList from "./ItemList";

const ItemListContainer = () => {    
    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoria} = useParams()

        useEffect(()=> {
            setLoading(true)
            cargarDatos()
            .then(result => {
                if(!categoria) {
                    setListaProductos(result)
                } else {
                    setListaProductos(result.filter((productos) => productos.categoria === categoria))
                }
            })
            .catch((err)=>{
                console.log("No se pudieron cargar los productos " + err)
            })
            .finally(()=>{
                setLoading(false)
            })
        }, [categoria])
   
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