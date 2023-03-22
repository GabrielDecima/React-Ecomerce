import React, {useState} from 'react';

const Contador = () => {

const [contador, setcontador] = useState(0);

function modifiContador (operacion) {
    if(operacion == "+"){
        setcontador(contador + 1)
    } else {
        if (contador>0){
            setcontador(contador - 1)
        } 
    }


}
    return (
        <>
            <button onClick={() => modifiContador("+") } className='btn btn-light'>Sumar</button>

                <h1>{contador}</h1>

            <button onClick={() => modifiContador("-")} className='btn btn-light'>Restar</button>
        </>
    );
}

export default Contador;
