const Item = ({ name, stock, cost, description, imgPath}) => 
{
    return (
        <>
            <img src={imgPath} alt= {description} />  
            <div >
                <h5 >{name}</h5>
                <p >$ {cost} </p>
                <p >Stock: {stock} </p>
                <p >Descripcion: {description}</p>
            </div>  
        </>        
    );
}
export default Item;
