import Button from 'react-bootstrap/Button'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import { getProductData } from '../productsStore'

function CartProduct({id, quantity}) {

    const cart = useContext(CartContext)
    const productData = getProductData(id)
    

  return (
    <>
        <h3>{productData.name}</h3>
        <p>Cantidad: {quantity}</p>
        <p>Precio: {(quantity*productData.price).toFixed(2)} €</p>
        <Button size='sm' onClick={function() {cart.deleteFromCart(id)}}>Eliminar</Button>
        <hr></hr>
    </>
  )
}

export default CartProduct