import itemCall  from "../utils/itemCall"
import { itemData } from "../utils/itemData"
import Item from "./Item";
import React, { useState, useEffect } from "react";

const ItemList = () =>
{
    const [product, setProduct] = useState([]);
    useEffect(() =>
    {
        itemCall(itemData)
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, [])

    return(
        <>
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
        </>
    );
}
export default ItemList;