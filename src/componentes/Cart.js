import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {CartItem} from "./CartItem"
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import { collection, Timestamp, addDoc} from "firebase/firestore"
import {db} from '../utils/firebase' 

const Cart = () => {
    const carritoContext = useContext(CartContext)

    //Enviar orden de compra
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
        //crear referencia de la colleccion donde guardo los datos de las ordenes de compra
        const ordersCollection = collection(db, 'orders')
        //crear nuevo documento de la orden
        const docReference = await addDoc(ordersCollection, newOrder)
        //referencia del documento
        const idOrden = docReference.id
        return alert("La orden de compra se ha ejecutado correctamente, su nro de orden es" + idOrden)
    }
    
    return (
        //mostrar productos en el carrito y formulario de compra
        carritoContext.productosEnCarrito.length > 0 ?
        <>
            <div className="container mt-5">
                <h2>Tu carrito</h2>
                <ul className="list-group">
                    { 
                        carritoContext.productosEnCarrito.map((producto) => {
                            return <CartItem key={producto.item.id} itemProps={producto}/> 
                        })
                    }
                </ul>
                <div className="justify-content-end d-flex mt-2">
                    <Button variant="outline-danger" onClick={carritoContext.clear}>Vaciar carrito</Button>
                </div>
                <div className="m-5 d-flex justify-content-around">
                    <h3>Total: $ {carritoContext.calcularPrecioTotal()}
                    </h3>
                </div>
            </div>
            <form onSubmit={sendOrder} className="needs-validation container"  id="formularioCompra">
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" required/>
                        <div className="invalid-feedback" id="errorFirstName">
                        Complete su nombre
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" required/>
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
                <button className="btn btn-success btn-lg" type="submit" id="btn-finalizarCompra">Finalizar compra</button>
            </form>
        </>
        : 
        <div className="m-5 text-center">
            <h2>Su carrito esta vacio</h2>
            <Link to="/" className="btn btn-success">Ver productos</Link>
        </div>
        
    )
}

export default Cart