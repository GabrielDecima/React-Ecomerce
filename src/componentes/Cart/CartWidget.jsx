import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {BsCart2} from 'react-icons/bs';
import Swal from 'sweetalert2';
import Carrito from '../carrito'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { CarritoContext, CarritoProvider } from '../../context/CarritoContext';



class Question extends React.Component {
  render() {
    return <h3> Lets go for a <BsCart2 />? </h3>
  }
}


const CartWidget = () => {



    return (
        <>
        

        <Link className='d-flex m-auto p-2 icon-cart' to="/carrito"><BsCart2/>
        </Link>


   

        </>



    );
}

export default CartWidget;
