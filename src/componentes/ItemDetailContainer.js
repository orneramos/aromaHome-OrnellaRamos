import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { cargarDatos }  from "../helpers/cargarDatos"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {   
        setLoading(true)
        cargarDatos()
        .then(result => {
            setItemDetail(result.find((producto) => producto.id === Number(itemId)))
        })
        .catch(err => {
            console.log("Error:" + err)
        })
        .finally(() => { 
            setLoading(false)
        })
    }, [])

    return(
        <>
            { 
                loading
                ? <h2>Loading item...</h2>
                : <ItemDetail item={itemDetail}/>
            } 
        </>
        
    )
}

export default ItemDetailContainer