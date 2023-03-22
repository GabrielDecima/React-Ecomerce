import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './styles/App.css'
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import Contador from './componentes/Cart/Contador';
import Home from './componentes/home';
import Carrito from './componentes/carrito';
import About from './componentes/about';
import Contacto from './componentes/contacto';
import Swal from 'sweetalert2';
import Footer from './componentes/footer';
import Categorias from './componentes/categorias';



const App = () => {
    return (
      <>
       
            <BrowserRouter>
                <NavBar/>
                
              <Routes>
                <Route path="/React-Ecomerce/" element={<Home/>} />
                <Route path="/producto/:id" element={<ItemListContainer/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/carrito" element={<Carrito/>} />
                <Route path="/categorias/:id" element={<Categorias/>} />
                <Route path='*' element={<h1>Error 404</h1>}/>
              
              </Routes> 
              <Footer/>
              
            </BrowserRouter>
       
      </>


  );
}

export default App;

