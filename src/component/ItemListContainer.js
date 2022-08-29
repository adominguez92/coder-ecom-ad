import ItemCount from "./ItemCount";
import itemCall  from "../utils/itemCall"
import { itemData } from "../utils/itemData"
import Item from "./Item";
import React, { useState, useEffect } from "react";


const ItemListContainer  = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() =>
    {
        itemCall(itemData)
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, [])

    const onAdd = (info) =>
    {
        alert('En el carrito tengo esta cantidad de articulos: '+ info );
    }
    
    return(
        <>
            <h1>{props.saludo}</h1>
            {
                
                product.map(item =>
                (  
                    <Item 
                        key = {item.id}
                        name = {item.name}
                        stock = {item.stock}
                        cost = {item.cost}
                        description = {item.description}
                        imgPath = {item.img}
                    />
                ))
            }
            <ItemCount ini={1} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;