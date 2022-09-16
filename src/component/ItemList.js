
import Item from "./Item";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firebaseConfig";

const ItemList = () =>

{
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() =>
    {
        firestoreFetch(id)
            .then(result => setProduct(result))
    }, [id])

    return(
        <>
            {  
            product.map(item =>
            (  
                <Item 
                    key = {item.id}
                    id = {item.id}
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