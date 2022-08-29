import React, { useState } from 'react'; 

const ItemCount = ({ini, stock, onAdd}) =>
{
    const [valor, setCount] = useState(ini);

    const incremento = () =>
    {
        if(valor < stock)
        {
            setCount(valor + 1) 
        }   
    }

    const decremetno = () =>
    {
        if(valor > ini)
        {
            setCount(valor - 1) 
        }       
    }

    return (
        <>
            <div className='count'>
                <button type="button" className='btn btn-light' onClick={decremetno}>-</button>
                    <label >{valor}</label>
                <button type="button" className='btn btn-light' onClick={incremento}>+</button>    
                <div>
                <button type="button" className='btn btn-outline-success btn-lg' onClick={() => onAdd(valor)}>Agregar al Carro</button>
                </div>
            </div>
        </>
    );
}
export default ItemCount;