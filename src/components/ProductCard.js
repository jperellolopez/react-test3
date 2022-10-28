// COMPONENTE PRODUCTCARD: tarjetas con la información de los productos
import {Card, Button, Form, Row, Col} from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'

function ProductCard({id, name, price, cores, clock, tdp, graphics}) {

    // acceso a los métodos del context
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(id)
    console.log(cart.items)

    return (
        <Card>
            <Card.Body>
                <Card.Title className='mb-3'>{name}</Card.Title>
                <Card.Text>Precio: {price} €</Card.Text>
                <Card.Text>Núcleos: {cores}</Card.Text>
                <Card.Text>Frecuencia (GHz): {clock} </Card.Text>
                <Card.Text>Consumo (TDP): {tdp} </Card.Text>
                <Card.Text>Gráficos integrados: {graphics ? (graphics) : "No"}</Card.Text>
                {productQuantity > 0 
                ? <>
                    <Form as={Row}>
                        <Form.Label column="true" sm="6">En la cesta: {productQuantity}</Form.Label>
                        <Col sm="6">
                            <Button sm="6" className='mx-2' onClick={function() {cart.addOneToCart(id)}}>+</Button>
                            <Button sm="6" className='mx-2'  onClick={function() {cart.removeOneFromCart(id)}}>-</Button>
                        </Col>
                    </Form>
                    <Button variant='danger' className='my-2' onClick={function() {cart.deleteFromCart(id)}}>Eliminar de la cesta</Button>
                </> 
                : <Button variant="primary" onClick={function() {cart.addOneToCart(id)}}>Añadir a la cesta</Button>}
            </Card.Body>
        </Card>
    )
}

export default ProductCard