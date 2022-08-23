import CartWidget from "./CartWidget";

const NavBar = () =>
{return(
    <>
    <header>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <CartWidget />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Extras
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Extra Action</a></li>
                        <li><a className="dropdown-item" href="#">Extra Another action</a></li>
                        <li><a className="dropdown-item" href="#">Extra Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
);
    
}

export default NavBar;