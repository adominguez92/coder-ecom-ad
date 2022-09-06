import { Link } from 'react-router-dom';
import logo from './logo.ico'

const CartWidget = () =>
{
    return(
    <>
        <Link  to="/">
        <div className="navbar-brand">
            <img src={logo} alt="box logo" width="35" height="35" className="d-inline-block align-text-top" />
            Box Store 
        </div>
        </Link>
    </>
    );
}

export default CartWidget;