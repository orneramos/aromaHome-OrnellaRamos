import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../utils/firebase'
import ItemList from "./ItemList"

const ItemListContainer = () => {    
    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoria} = useParams()

    useEffect(()=> {
        const getData = async() => {
            setLoading(true)
            const query = collection(db, 'items')
            const response = await getDocs(query)
            const stockProductos = response.docs.map(doc => {return{id: doc.id, ...doc.data()}})
            if(!categoria) {
                setListaProductos(stockProductos)
            } else {
                setListaProductos(stockProductos.filter((productos) => productos.categoria === categoria))
            }
            setLoading(false)
        }
        getData()
    }, [categoria])
   
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