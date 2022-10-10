import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CartDitail from "./CartDitail";
import { Link } from 'react-router-dom';
import { collection, serverTimestamp, doc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";


const Cart = () => {
    const ctx = useContext(CartContext);
    let costTotal = ctx.costTotal();
    let cantidadItem = ctx.qtysItems();
    const [nombre, setNombre] = useState();
    const [mail, setMail] = useState();
    const [tel, setTel] = useState();
    
    const ingresoNombre =  (event) =>{
        setNombre(event.target.value)
    }
    const ingresoMail =  (event) =>{        
        setMail(event.target.value)
    }
    const ingresoTel =  (event) =>{
        setTel(event.target.value)
    }

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
                name: nombre,
                email: mail,
                phone: tel
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
                <form className="fromulario"> 
                    <input 
                        type="text" 
                        placeholder="nombre"
                        className="nombreForm"
                        name="nombre"
                        onChange={ingresoNombre}></input>
                    <input 
                        type="email" 
                        placeholder="email"
                        className="emailForm"
                        name="mail"
                        onChange={ingresoMail}></input>
                    <input 
                        type="text" 
                        placeholder="telefono"
                        className="telefonoForm"
                        name="tel"
                        onChange={ingresoTel}></input>
                </form>
                <section className="compra_botones">
                    <button type="button" className="btn btn-outline-success btn-lg" onClick={createOrder}>Comprar</button>
                    <button type="button" className="btn btn-outline-danger btn-lg" onClick={ctx.clear}>Borrar Carrito</button>
                </section>
            </section>
        </>
    );
}
export default Cart;