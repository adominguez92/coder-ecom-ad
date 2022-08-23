import logo from './logo.ico'

const CartWidget = () =>
{
    return(
    <>
        <a className="navbar-brand" href="">
          <img src={logo} alt="" width="35" height="35" className="d-inline-block align-text-top" />
          Box Store
        </a>
    </>
    );
}

export default CartWidget;