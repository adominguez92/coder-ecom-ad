import { Link } from 'react-router-dom';
import logo from './logo.ico'

const CartWidget = () =>
{
    return(
    <>
        <Link  to="/cart" style={{textDecoration: "none"}} >
        <div className="navbar-brand position-relative">
            <img src={logo} alt="box logo" width="35" height="35" className="d-inline-block align-text-top" />
            <span className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4
            </span>
            Box Store 
            
        </div>
        </Link>
    </>
    );
}

export default CartWidget;