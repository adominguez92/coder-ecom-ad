import ItemCount from "./ItemCount";
import ItemList from "./ItemList"


const ItemListContainer  = (props) => {

    const onAdd = (info) =>
    {
        alert('En el carrito tengo esta cantidad de articulos: '+ info );
    }
    
    return(
        <>
            <h1>{props.saludo}</h1>
            <ItemList />
            <ItemCount ini={1} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;