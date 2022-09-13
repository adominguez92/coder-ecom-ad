import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartDitail from "./CartDitail";
const Cart = () => {
    const ctx = useContext(CartContext);
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
                            imgPath = {item.img}
                        />
                    ))
                }    
                <button type="button" className="btn btn-primary btn-lg"onClick={ctx.clear}>Borrar Carrito</button>
            </section>
        </>
    );

}
export default Cart;