import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartDitail from "./CartDitail";
import { Link } from 'react-router-dom';

const Cart = () => {
    const ctx = useContext(CartContext);
    let costTotal = ctx.costTotal();
    let cantidadItem = ctx.qtysItems();
   
    if (cantidadItem === 0) return <Link to ="/" >Sin Articulos vuelve a la lista y compra algo</Link>  
    return(
        <>
            <section style={{textAlign : "center"}}>
                {
                    ctx.cartList.map(item =>
                    (
                        <CartDitail 
                            key = {item.id} 
                            id = {item.id}
                            name = {item.name}
                            qty = {item.qty}
                            description =  {item.description}
                            imgPath = {item.img}/>
                    )
                    )     
                }
                {
                    console.log("Costo "+ costTotal + " Cantidad " +cantidadItem)
                }
                <h5>Costo Tolta: ${costTotal} </h5>
                <h5>Cantidad de articulos: {cantidadItem} </h5>    
                <section className="compra_botones">
                    <button type="button" className="btn btn-outline-success btn-lg">Comprar</button>
                    <button type="button" className="btn btn-outline-danger btn-lg" onClick={ctx.clear}>Borrar Carrito</button>
                </section>
            </section>
        </>
    );
}
export default Cart;