import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cancel from './pages/Cancel'
import Store from './pages/Store'
import Success from './pages/Success'
import CartProvider from './CartContext';

// Instalar bootstrap: 'npm install bootstrap react-bootstrap'
// Instalar el router: 'npm install react-router-dom@6'

/*
React Router: vincula una página con una ruta de la aplicación. 
Ej: localhost:3000 -> Home, localhost:3000/success -> success, localhost:3000/cancel -> cancel
 */

/* Componente container: importado de bootstrap, separa el contenido de los márgenes de la pantalla.
Las rutas llevan a las páginas Store, Success y Cancel, con sus componentes definidos en la carpeta pages. 
*/
function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
