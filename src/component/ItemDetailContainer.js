import { useEffect, useState } from "react";
import itemCall  from "../utils/itemCall"
import ItemDetail from "./ItemDetail";
const { itemData } = require("../utils/itemData")

const ItemDetailContainer = ()=>
{
    const [product, setProduct] = useState({});
    useEffect(() =>
    {
        itemCall(itemData[5])
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <>
            <ItemDetail item={product} />
        </>
    );
}
export default ItemDetailContainer;