
import { useParams } from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader'
import '../styles/loader.css'

const Categorias = () => {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} =useParams()
 
    useEffect(() => {

        const consulDatos = async () =>{
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Celulares')
            const data = await response.json()
            const resultado = data.results.filter((productoArray) => productoArray.attributes[0].value_id == id) 
        

        
            setProducto(resultado.map((prod) =>
                
                <div className="card" key={prod.id} style={{width: '18rem'}}>
                    <img src={prod.thumbnail} className="imgCard" alt="" />
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text">{prod.title}</p>
                            
                            <p className="card-text">Precio: ${prod.price}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={"/producto/" + prod.id}>Ver producto</Link></button>
                        </div>
                </div>

            ));
             
        }
    
        consulDatos()
    
    }, [producto]);


    if(loading==true){

        setTimeout(() => {
            setLoading(false)
            
        },1000);

        return(
            <div className='position-absolute top-50 start-50 translate-middle'>   
                <Loader/>
            </div>)

    }else{

        return (
            
            <div className='row'>
                
               {producto}
          
               
            </div>
        );

    }
    
   
}



export default Categorias;