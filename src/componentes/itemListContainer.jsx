import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { CarritoContext, CarritoProvider } from '../context/CarritoContext';
import Categorias from './categorias';
import Dropdown from './NavBar/Dropdown';
import Card from 'react-bootstrap/Card'
import Loader from './Loader';
import '../styles/loader.css'

// Realizamos la consulta a la base de datos para poder traer los productos. 
const ItemListContainer = () => {

    const [producto, setproducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} =useParams()
   
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=Celulares')
        .then(response => response.json())
        .then(productos =>{
            const resultado = productos.results.find((productoArray) => productoArray.id == id) 
           
            setproducto(resultado) 
          


        })
        
    
    }, []);


// Armamos la base que tendras los productos. Además llamamos a detalle producto. 
    
    

        if(loading==true){

            setTimeout(() => {
                setLoading(false)
                
            },500);
    
            return(
                <div className='position-absolute top-50 start-50 translate-middle'>   
                    <Loader/>
                </div>)
    
        }else{
    
            return (
                
              
                    
            <Card style={{ width: '18rem' }}>
            
                <ItemDetail producto={producto}/>
                <CarritoProvider producto={producto}/>

            </Card>
            
                        
                   
            );
    
        }



}

export default ItemListContainer;




