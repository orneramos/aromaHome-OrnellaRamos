import { stockProductos } from "../data/stockProductos"

export const cargarDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stockProductos)
        }, 1000)
    })
}