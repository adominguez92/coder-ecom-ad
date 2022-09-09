import { Link } from 'react-router-dom';

const Item = ({ id, name, stock, cost, description, imgPath}) => 
{
    return (
        <>  
            
            <div >
                <div className="imgContenedor">
                    <img className="imgPrueba" src={imgPath} alt= {description} />  
                </div>
                <h5 >{name}</h5>
                <p >$ {cost} </p>
                <p >Stock: {stock} </p>
                <p >Descripcion: {description}</p>
                <Link to={`/item/${id}`} style={{textDecoration: "none"}} > Mas info </Link>
            </div>  
        </>        
    );
}
export default Item;
