import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import logo from './logo.ico'

const CartWidget = () =>
{
    const ctx = useContext(CartContext);
    let cantidadItmes = ctx.qtysItems();

    return(
    <>
        <Link  to="/cart" style={{textDecoration: "none"}} >
        <div className="navbar-brand position-relative">
            <img src={logo} alt="box logo" width="35" height="35" className="d-inline-block align-text-top" />
                
                <span className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {
                    cantidadItmes !== 0 ? cantidadItmes : ''
                }
                </span>
            
            Box Store 
            
        </div>
        </Link>
    </>
    );
}

export default CartWidget;