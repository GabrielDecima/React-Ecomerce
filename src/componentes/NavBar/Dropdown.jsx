import React from 'react';
import {Link} from 'react-router-dom'
import { FcList } from "react-icons/fc";



class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FcList /> ?</h3>
  }
}

const Dropdown = () => {


    return (
        <>
          <li className="nav-item dropdown">
          <a className="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><button className='btn icon'> Categorias</button></a>
          <div className="dropdown-menu">
            <Link to={"/categorias/2503" }><a className="dropdown-item " href="#">Motorola</a></Link>
            <div className="dropdown-divider" />
            <Link to={"/categorias/206" }><a className="dropdown-item" href="#">Samsung</a></Link>
            <div className="dropdown-divider" />
            <Link to={"/categorias/59387" }><a className="dropdown-item" href="#">Xiaomi</a></Link>
            <div className="dropdown-divider" />
            <Link to={"/categorias/16457" }><a className="dropdown-item" href="#">TCL</a></Link>
          </div>
        </li>  
        </>
    );
}

export default Dropdown;
