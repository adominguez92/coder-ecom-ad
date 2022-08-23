import logo from './logo.ico'

const CartWidget = () =>
{
    return(
    <>
        <a className="navbar-brand" href="">
          <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top" />
          Box Store
        </a>
    </>
    );
}

export default CartWidget;