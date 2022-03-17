import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(false)

    const producto1 = {
        tipoProducto: "Difusor",
        fragancia: "Sweet Dreams",
        precio: 600,
        imgURL:"../imagenes/difusor.jpg",
        linea: "Linea Terra. Fragancias con notas exóticas, calidad premium de larga duración",
        descripcion: "Floral, amberado, relajante. Notas de tilo, flores y lavanda"
    }
    const getItemDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto1) 
        }, 2000)
    })

    useEffect(() => {   
        setLoading(true)
        getItemDetail.then(result => {
            setProductDetail(result)
        }).catch(err => {
            console.log("Error:" + err)
        }).finally(() => { 
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