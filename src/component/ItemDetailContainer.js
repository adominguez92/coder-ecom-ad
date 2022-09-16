import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOnlyDoc } from "../utils/firebaseConfig";


const ItemDetailContainer = ()=>
{
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() =>
    {
        firestoreFetchOnlyDoc(id)
            .then(result => setProduct(result))
            
    }, [id]);

    return(
        <>
            <ItemDetail item={product} />
        </>
    );
}
export default ItemDetailContainer;