// PÁGINA STORE: el router redirige aquí por defecto (home page)
import { Row, Col } from 'react-bootstrap'
import {productsArray} from '../productsStore' 
import ProductCard from '../components/ProductCard'

function Store() {
  return (
    <>
      <h1 className='p-5' align='center'>Sección: CPU, Procesadores</h1>
      <Row xs={1} md={3} className="g-4">
      {productsArray.map((product, index) =>
        (<Col align="center" key={index}>
          <ProductCard id={product.id} name={product.name} price={product.price} cores={product.core_count} clock={product.core_clock} tdp={product.tdp} graphics={product.integrated_graphics}/>
        </Col>)
      )}

      </Row>
    </>
  )
}

export default Store