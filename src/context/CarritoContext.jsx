import React, {createContext,useState} from 'react';
import itemListContainer from '../componentes/itemListContainer'

// Creamos el contexto
const CarritoContext = createContext()


const CarritoProvider = (props) => {
  

    const [carrito, setCarrito] = useState([]);

  
    const agregarProducto = (prod,cant) =>{
    const aux = carrito
    
    
    let indice = aux.findIndex(producto => producto.producto.id == prod.producto.id)

    if(indice != -1){
      aux[indice].cantidad = cant
    
    }else{
      const prodCarrito = {... prod, cantidad: cant}
      aux.push(prodCarrito)
    }
    setCarrito(aux)
    
    }
    
    const eliminarDelCarrito = (prod,cant) =>{
    const aux = carrito
    let indice = aux.findIndex(producto => producto.producto.id == prod.producto.id)

    aux.splice(indice,1)
    setCarrito(aux)
      
    }


   
    
    
    

    return (
        <>
        <CarritoContext.Provider value={{carrito,agregarProducto,eliminarDelCarrito}}>
        {props.children}
        </CarritoContext.Provider>

        </>
    );
}

export {CarritoContext, CarritoProvider};
