import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () =>
{return(
    <>
    <header>
        <nav className="navbar navbar-expand-lg bg-light stiloLetra">
            <div className="container-fluid">
                <CartWidget />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to ="/">
                        <div className="nav-link active" aria-current="page">Todos</div>
                    </Link> 
                    </li>
                    <li className="nav-item">
                    <Link to ="/category/6">
                        <div className="nav-link active" aria-current="page">Con Disfras</div>
                    </Link> 
                    </li>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Por Tipo</div>
                            <ul className="dropdown-menu">
                                <Link to ="/category/4">
                                    <div className="nav-link active" aria-current="page">Tipo Agua</div>
                                </Link>
                                <Link to ="/category/2">
                                    <div className="nav-link active" aria-current="page">Tipo Electrico</div>
                                </Link>
                                <Link to ="/category/5">
                                    <div className="nav-link active" aria-current="page">Tipo Fuego</div>
                                </Link>
                                <Link to ="/category/1">
                                    <div className="nav-link active" aria-current="page">Tipo Normal</div>
                                </Link>
                                <Link to ="/category/3">
                                    <div className="nav-link active" aria-current="page">Tipo Planta</div>
                                </Link>
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