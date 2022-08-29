import ItemCount from "./ItemCount";

const ItemListContainer  = (props) => {
    
    const onAdd = (info) =>
    {
        alert('En el carrito tengo esta cantidad de articulos: '+ info );
    }
    
    return(
        <>
            <h1>{props.saludo}</h1>
            <img src={props.imgPath} alt={props.description} className="imgPrueba"></img> 
            <ItemCount ini={1} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;