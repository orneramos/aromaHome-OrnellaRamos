import { useContext } from "react"
import { collection, Timestamp, addDoc, documentId, query, where, getDocs, writeBatch} from "firebase/firestore"
import { CartContext } from "../context/CartContext"
import { db } from '../utils/firebase' 
import { useNavigate } from 'react-router-dom';

const Form = () => {
    
    const carritoContext = useContext(CartContext)
    let navigate = useNavigate();

    //Crear y guardar orden de compra
    const sendOrder = async(e) => {
        e.preventDefault()

        const nombre = e.target[0].value
        const apellido = e.target[1].value
        const email = e.target[2].value

        const newOrder = {
            buyer: {
                nombre, 
                apellido, 
                email
            },
            items: carritoContext.productosEnCarrito,
            total: carritoContext.calcularPrecioTotal(),
            date: Timestamp.fromDate(new Date())
        }

        //crear referencias de la colleccion de ordenes de compra y de los items
        const ordersCollection = collection(db, 'orders')
        const itemsCollection = collection(db, 'items')

        const batch = writeBatch(db)
        let outOfStock = false

        //obtener info de firestore
        const q = query(itemsCollection, where(documentId(), "in", carritoContext.productosEnCarrito.map((prod) => prod.item.id)));
        const querySnapshot = await getDocs(q);

        querySnapshot.docs.forEach((doc) => {
            const itemEnCarrito = carritoContext.productosEnCarrito.find((product) => product.item.id === doc.id)

            if (doc.data().stock >= itemEnCarrito.quantity) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemEnCarrito.quantity
                })
            } else {
                outOfStock = true
            }
        })

        if (!outOfStock) {
            //si hay stock de los productos creo la orden de compra y luego vacio el carrito
            addDoc(ordersCollection, newOrder)
                .then((response) => {
                    batch.commit()
                    const orderId = response.id
                    carritoContext.clear()
                    navigate(`/success/${orderId}`)
                })
        } else {
            alert("Hay items sin stock")
        } 
    }

    return(
        <form onSubmit={sendOrder} className="needs-validation container col-md-6 col-lg-7"  id="formularioCompra">
            <p className="fs-3">Complete los siguientes datos para finalizar la compra</p>
            <div className="row g-3">
                <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Nombre" required/>
                    <div className="invalid-feedback" id="errorFirstName">
                    Complete su nombre
                    </div>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Apellido" required/>
                    <div className="invalid-feedback" id="errorLastName">
                    Complete su apellido
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input type="email" className="form-control" id="email" placeholder="midireccion@ejemplo.com" required/>
                        <div className="invalid-feedback" id="errorEmail">
                            Direccion de email invalida
                        </div>
                    </div>
                </div>                        
            </div>
            <br></br>
            <button className="btn btn-success btn-lg" type="submit">Finalizar compra</button>
        </form>
    )
}

export default Form