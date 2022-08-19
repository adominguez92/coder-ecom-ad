import CartWidget from "./CartWidget";
const NavBar = () =>
{return(
    <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <CartWidget />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Extras
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Extra Action</a></li>
                        <li><a class="dropdown-item" href="#">Extra Another action</a></li>
                        <li><a class="dropdown-item" href="#">Extra Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
);
    
}

export default NavBar;