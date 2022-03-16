import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const producto1 = {
        tipoProducto: "Difusor",
        fragancia: "Sweet Dreams",
        precio: 600,
        imgURL:"../imagenes/difusor.jpg",
        linea: "Linea Terra. Fragancias con notas exóticas, calidad premium de larga duración",
        descripcion: "Floral, amberado, relajante. Notas de tilo, flores y lavanda"
    }
    useEffect(()=>{   
        const getItemDetail = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(producto1)
            }, 2000)
        })
        getItemDetail.then(result => {
            setProductDetail(result)
            console.log(result)
        }).catch(err => {
            console.log("Error al cargar el producto")
        })
    }, [])
    return(
        <ItemDetail productDetail={productDetail}/>
    )
}

export default ItemDetailContainer