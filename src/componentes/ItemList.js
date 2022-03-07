import React from "react";
import Item from "./Item"

const ItemList = () => {
    const agregar = () => {
        console.log("Se ha agregado el producto al carrito")
      }
    return (
        <Item 
        nombreProducto="Difusor" 
        precio={600} 
        agregar={agregar}
        imgURL="../imagenes/difusor.jpg"
        />
    )
}

export default ItemList