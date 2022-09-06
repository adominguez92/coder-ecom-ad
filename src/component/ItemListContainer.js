import ItemCount from "./ItemCount";
import ItemList from "./ItemList"



const ItemListContainer  = () => {
    
    
    const onAdd = (info) =>
    {
        alert('En el carrito tengo esta cantidad de articulos: '+ info );
    }
    
    return(
        <>
            <div className="grilla">
                <ItemList />
            </div>
            <ItemCount ini={1} stock={5} onAdd={onAdd} />   
        </>
    );
}

export default ItemListContainer;