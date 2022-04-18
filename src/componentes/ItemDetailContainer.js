import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {db} from '../utils/firebase'
import {getDoc, doc} from 'firebase/firestore'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {  
         
        setLoading(true)

        const cargarItem = async() => {
            const query = doc(db, "items", itemId)
            const response = await getDoc(query)
            const responseData = response.data()
            const newDoc = {id: response.id, ...responseData}
            setItemDetail(newDoc)
            setLoading(false)
        }

        cargarItem()

    }, [itemId])

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