import ItemCount from "./ItemCount";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({item})=>
{
    const [count, setCount] = useState(0);

    const onAdd = (info) =>
    {
        alert('En el carrito tengo esta cantidad de articulos: '+ info );
        setCount(info)
    }
    return (
        <>
            <img src={item.img} alt= {item.description} />  
            <div >
                <h5 >{item.name}</h5>
                <p >$ {item.cost} </p>
                <p >Stock: {item.stock} </p>
                <p >Descripcion: {item.description}</p>
            </div> 
            {            
                count === 0
                ?<ItemCount ini={count} stock={item.stock} onAdd={onAdd}/>
                :<Link to='/cart' style={{textDecoration: "none"}} >
                    <button type="button" className="btn btn-danger">Ir al Carro</button>
                </Link>
            }
        </>        
    );
}
export default ItemDetail;