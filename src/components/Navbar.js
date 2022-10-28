// COMPONENTE NAVBAR

// importa elementos de bootstrap (es necesario haberlo instalado, ver comando en App.js)
import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import CartProduct from './CartProduct'

function NavbarComponent() {

    // acceso a los métodos del context
    const cart = useContext(CartContext)

    // el modal no se muestra por defecto, se manejará poiendo setShow a true o false
    const [show, setShow] = useState(false)
    const handleClose = function () { setShow(false) }
    const handleShow = function () { setShow(true) }

    // función checkout: hace un POST al puerto 4000 (backend) pasandole los items de la cesta. En el backend, la sesión es creada y envia la url de vuelta a aquí, redirigiendo a Stripe
    const checkout = async function() {
        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url)
            }
        })
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}>Cesta ({productsCount} productos)</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tu cesta de productos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 
                    ? <>
                        <p>Productos en tu cesta: </p>
                        {cart.items.map((currentProduct, index) => (
                            <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                        ))}
                        <h1>Total: {cart.getTotalCost().toFixed(2)} €</h1>
                        <Button variant='success' onClick={checkout}>Realizar pedido</Button>
                    </>
                    : <h1>Tu cesta no tiene productos</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )

}

export default NavbarComponent