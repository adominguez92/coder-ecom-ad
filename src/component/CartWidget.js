import logo from './logo.ico'

const CartWidget = () =>
{
    return(
    <>
        <a class="navbar-brand" href="">
          <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
          Box Store
        </a>
    </>
    );
}

export default CartWidget;