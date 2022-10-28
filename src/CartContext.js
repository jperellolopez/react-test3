// CONTEXT: permite definir funciones que podrán ser accedidas desde cualquier componente (sin tener que pasar de componente 'padre' a 'hijo'). Provider: da acceso a la aplicación a cualquier cosa que está en el contexto

import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";

// En el contexto se especifican las funciones que formarán parte de él, pero no se definen dentro de CartContext, aquí sólo se referencia que se van a poder usar
export const CartContext = createContext({
    items: [],
    getProductQuantity: function(){},
    addOneToCart: function(){},
    removeOneFromCart: function(){},
    deleteFromCart: function(){},
    getTotalCost: function(){}
})

// En esta función se definen las funciones del contexto
export function CartProvider({children}){

    // estado inicial: arr vacio
    const [cartProducts, setCartProducts] = useState([])

    // función que obtiene la cantidad de productos que tienen un mismo id y la devuelve
    function getProductQuantity(id) {
        // interrogante = solo sacará la cantidad si el producto esta definido
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if(quantity === undefined) {
            return 0
        }

        return quantity
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id)

        // si la cantidad de un producto es 0 no está en el carrito y hay que añadir un nuevo objeto con cantidad 1 y el id pasado
        if (quantity === 0) {
            setCartProducts([...cartProducts, {id:id, quantity:1}]) 
        } else { // el producto ya está en el carrito así que hay que sumar uno a ese objeto (el false de : simplemente lo deja igual)
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? {...product, quantity:product.quantity+1} : product
                )
            )
        }

    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id)

        // si solo hay una unidad borra el producto entero
        if (quantity == 1) {
            deleteFromCart(id)
        // si hay mas de una unidad, resta una a la cantidad (mismo código que en la anterior pero restando)
        } else {
            setCartProducts( cartProducts.map(
                product => product.id === id ? {...product, quantity:product.quantity-1} : product
            ))
        }
    }

    function deleteFromCart(id){
        // si el objeto cumple una condición, lo elimina
        setCartProducts(
            cartProducts => cartProducts.filter(currentProduct => { return currentProduct.id != id})
        )
    }

    function getTotalCost(){
        let totalCost = 0

        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
        }) 

        return totalCost

    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    // envia las funciones y valores contenidas en el objeto contextValue al resto de la aplicacion {children}
  return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
