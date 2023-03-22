import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader'
import '../styles/loader.css'




const Home = () => {

    const [producto, setproducto] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        const consultarDatos= () =>{
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=Celulares')
            .then((response) => response.json())
            .then(({results}) => {


                results.forEach(producto => {
                    
                    setproducto((results).map((detalle) => 
                        

                            <div className="card" key={detalle.id} style={{width: '16rem'}}>
                                <img src={detalle.thumbnail} className="imgCard" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title"></h5>
                                        <p className="card-text">{detalle.title}</p>
                                        <p className="card-text">Marca: {detalle.attributes[0].value_name}</p>
                                        <p className="card-text">Precio: ${detalle.price}</p>
                                        <button className='btn btn-dark'><Link className='nav-link' to={"/producto/" + detalle.id}>Ver producto</Link></button>
                                    </div>
                            </div>
                    ))
                    
                }) 
            })
        } 
        consultarDatos()
        
    }, []);
    
    
    if(loading==true){

        setTimeout(() => {
            setLoading(false)
            
        },2000);

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
    
    export default Home;
    
   