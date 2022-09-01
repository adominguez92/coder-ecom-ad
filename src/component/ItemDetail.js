import ItemCount from "./ItemCount";

const ItemDetail = ({item})=>
{
    const onAdd = (info) =>
    {
        alert('En el carrito tengo esta cantidad de articulos: '+ info );
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
            <ItemCount ini={1} stock={item.stock} onAdd={onAdd}/>
        </>        
    );
}
export default ItemDetail;