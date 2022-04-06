import { useParams } from "react-router-dom"

const Success = () => {
    const {orderId} = useParams()
    return (
        <div className="m-5 text-center">
            <h3>Su compra se ejecutó correctamente. Su nro de orden es {orderId} </h3>
        </div>
    )
}

export default Success