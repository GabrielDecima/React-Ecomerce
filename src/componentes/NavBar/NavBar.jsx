import ItemListContainer from '../itemListContainer';
import CartWidget from '../Cart/CartWidget';
import Dropdown from './Dropdown';
import Form from './Form';
import React from 'react';
import {Link} from 'react-router-dom'
import { FcAbout,FcHome,FcContacts } from "react-icons/fc";

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FcHome /> ? <FcContacts/> ? <FcAbout/></h3>
  }
}


const NavBar = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tienda Online GD</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto ul-nav">


        <li className="nav-item contenedor-nav li-nav">
          <Link className="nav-link active" to="/React-Ecomerce/"><button className='btn icon'> Home</button></Link>
          
        </li>
       
        <li className="nav-item contenedor-nav li-nav">
          <Link className="nav-link" to="React-Ecomerce/contacto"><button className='btn icon'> Contacto</button> </Link>
        </li>
 
        <li className="nav-item contenedor-nav li-nav">
          <Link className="nav-link" to="React-Ecomerce/about"><button className='btn icon'>About</button> </Link>
        </li>

        <Dropdown/>
       <CartWidget/>
      </ul>
        <Form busqueda="Buscar Producto"/>
    </div>
  </div>
</nav> 
        </>
    );
}

export default NavBar;