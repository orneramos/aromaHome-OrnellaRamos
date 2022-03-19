import { useEffect, useState } from "react"
import { cargarDatos }  from "../helpers/cargarDatos"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {   
        setLoading(true)
        cargarDatos()
        .then(result => {
            setProductDetail(result.find(product => product.id === 1))
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
                : <ItemDetail productDetail={productDetail}/>
            }
        </>
        
    )
}

export default ItemDetailContainer