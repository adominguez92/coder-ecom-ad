import { useContext } from "react";
import { CartContext } from "./CartContext";


const CartDitail = ({id, name, qty, description, imgPath}) => {
    const ctx = useContext(CartContext);
    return(
        <div className="Ditail_Contenedor">
            <div className="imgContenedor">
                <img className="imgPrueba" src={imgPath} alt= {description} />  
            </div>
            <h5>Producto : {name}</h5>
            <h5>Cantidad: {qty} </h5>
            <h5>Costo: ${ctx.costXItem(id)} </h5>
            <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => ctx.removeItem(id)}>X</button>
        </div>
    );  
}
export default CartDitail;