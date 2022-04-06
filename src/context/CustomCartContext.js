import {useState} from 'react'
import {CartContext} from './CartContext'

export const CustomCartContext = ({children}) => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([])
    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            const newItem = {
                item: item, 
                quantity: quantity
            }
            setProductosEnCarrito([...productosEnCarrito, newItem])
        } else {
            const productInCart = productosEnCarrito.find(producto => producto.item.id === item.id)
            productInCart.quantity = productInCart.quantity + quantity
            setProductosEnCarrito([...productosEnCarrito])
        }
    }

    const removeItem = (itemId) => {
        const nuevoArray = productosEnCarrito.filter(producto => producto.item.id !== itemId)
        setProductosEnCarrito(nuevoArray)
    }

    const clear = () => {
        setProductosEnCarrito([])
    }

    const isInCart = (itemId) => {
        const valorIsInCart = productosEnCarrito.some(producto => producto.item.id === itemId)
        return valorIsInCart
    }

    const calcularPrecioTotal = () => {
            let total = 0
            productosEnCarrito.map(producto => 
               total += producto.quantity * producto.item.precio
            )
            return total
    }

    const calcularTotalItems= () => {
        let total = 0
        productosEnCarrito.map(producto => 
           total += producto.quantity
        )
        return total
    }
    
    return(
        <CartContext.Provider value={{productosEnCarrito, addItem, removeItem, clear, isInCart, calcularTotalItems, calcularPrecioTotal}}>
            {children}
        </CartContext.Provider>
    )
}

