import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import Swal from 'sweetalert2';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CardImg } from 'react-bootstrap';



const Carrito = () => {

  const {carrito, agregarProducto, eliminarDelCarrito} = useContext(CarritoContext)
  const [carritoLocal, setcarritoLocal] = useState([]);
  const [mostrarTot, setmostrarTot] = useState('');



useEffect(() => {

 

    const prodCarrito = carrito.map(producto=>
   
        <Card  key={producto.producto.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.producto.thumbnail} />
        <Card.Body>
          <Card.Title>{producto.producto.title}</Card.Title>
        
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Cantidad: {producto.cantidad}</ListGroup.Item>
        <ListGroup.Item>Precio unitario: ${producto.producto.price}</ListGroup.Item>
        <ListGroup.Item>Precio total: ${producto.producto.price*producto.cantidad}</ListGroup.Item>

      </ListGroup>

        <Card.Body>
        <Button variant="dark" size="lg" onClick={()=>eliminarDelCarrito(producto)}>Eliminar del carrito</Button>
        </Card.Body>

      </Card>

      

    )  


 setcarritoLocal(prodCarrito)

}, [carritoLocal]);



return (
    (carrito.length !=0) ? <><div className="container row">{carritoLocal}</div></>:<>{Swal.fire({
        
        showConfirmButton: true,
        icon: 'error',
        title: 'No existen productos en el carrito',
        confirmButtonText: `<a class="bonton-Alert" href="/React-Ecomerce/">Volver al inicio<a/>`,
        allowEscapeKey:false,
        allowEnterKey:false,
        allowOutsideClick:false,   
       
      })}
      
      </>
    
    )


}

export default Carrito;




