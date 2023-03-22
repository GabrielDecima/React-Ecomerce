import React, {useState,useContext,useEffect} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import Swal from 'sweetalert2';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CartWidget from './Cart/CartWidget';



// Recibimos por parametro el resultado de la busqueda en la base de datos, luego mostramos la información
// mediante una card de bt.

const ItemDetail = (producto) => {

    const [cantidad, setcantidad] = useState(1);
   
    const {carrito,agregarProducto,eliminarDelCarrito} = useContext(CarritoContext)
    
      const cantidadProducto = (operacion) => {


        if (operacion== "+"){
          setcantidad(cantidad +1)
        }  else {
  
          if(cantidad>1){
            
         
          setcantidad(cantidad -1)
          
        }
        
        }
      }
    
      const confirmacion = () =>{
              let timerInterval
              Swal.fire({
                title: 'Agregando al carrito!',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading()
                  const b = Swal.getHtmlContainer().querySelector('b')
                  timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                  }, 100)
                },
                willClose: () => {
                  clearInterval(timerInterval)
                }
              }).then((result) => {
               
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log('I was closed by the timer')
                }
              })
        }
     

    

    return (
        <>
          
      <Card.Img variant="top" src={producto.producto.thumbnail} />
      <Card.Body>
        <Card.Title>{producto.producto.title}</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio: ${producto.producto.price}</ListGroup.Item>
     
        <ListGroup.Item>Cantidad: {cantidad}</ListGroup.Item>
      </ListGroup>

      
      <Card.Body>
      <Button variant="primary" size="sm" onClick={()=> cantidadProducto("+")}>+</Button>{' '}
      <Button variant="danger" size="sm" onClick={()=> cantidadProducto("-")}> -</Button> {' '}
      <Button variant="dark" size="lg" onClick={()=> agregarProducto(producto,cantidad,confirmacion())}>Agregar al Carrito</Button>
  
                        
      </Card.Body>
   
               
        </>
    );
}

export default ItemDetail;







