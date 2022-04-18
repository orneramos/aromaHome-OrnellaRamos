import { useParams, Link } from "react-router-dom"

const Success = () => {
    const {orderId} = useParams()
    return (
        <div className="m-5 text-center">
            <h3>Su compra se ejecutó correctamente. Su nro de orden es {orderId} </h3>
            <Link to="/" className="btn btn-success m-3">Volver al inicio</Link>
        </div>
    )
}

export default Success