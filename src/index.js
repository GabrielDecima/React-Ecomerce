import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { CarritoProvider } from './context/CarritoContext';
import Skeleton from 'react-loading-skeleton';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
 <CarritoProvider>
    
    <App />
    
</CarritoProvider>




);


