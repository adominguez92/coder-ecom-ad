import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartDitail from "./CartDitail";
import { Link } from 'react-router-dom';
import { collection, serverTimestamp, doc, setDoc, updateDoc, increment } from "firebase/firestore";
//import { async } from "@firebase/util";
import { db } from "../utils/firebaseConfig";


const Cart = () => {
    const ctx = useContext(CartContext);
    let costTotal = ctx.costTotal();
    let cantidadItem = ctx.qtysItems();

    const createOrder =  () => {
        let itemFromBD = ctx.cartList.map(item=> ({
            id:item.id,
            title:item.name,
            price:item.cost ,
            qty:item.qty
        })
        )
        let order = {
            buyer:{
                name: "C2",
                email: "e@mail1.com",
                phone: "000000001"
            },
            item: itemFromBD,
            date: serverTimestamp(),
            total: costTotal

        }
        console.log(order)

        const creatOrderInFirestore = async (order) =>{
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        creatOrderInFirestore(order)
            .then(resutl =>{ 
                alert("Orden de compra creada!" + resutl.id)
                ctx.cartList.forEach(async(item) => {
                    const itemRef = doc(db, "products", item.id);
                    // Set the "capital" field of the city 'DC'
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty)
                    })
                })
            }).catch(err  => console.log(err))
        
        
        
        ctx.clear();
    }
    

    
   
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
                <h5>Costo Tolta: ${costTotal} </h5>
                <h5>Cantidad de articulos: {cantidadItem} </h5>    
                <section className="compra_botones">
                    <button type="button" className="btn btn-outline-success btn-lg" onClick={createOrder}>Comprar</button>
                    <button type="button" className="btn btn-outline-danger btn-lg" onClick={ctx.clear}>Borrar Carrito</button>
                </section>
            </section>
        </>
    );
}
export default Cart;