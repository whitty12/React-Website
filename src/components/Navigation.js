import { Button, Container, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'

const Navigation = () => {
  return (
    <Navbar className="navbar-expand-lg navbar-light bg-light">
        <NavbarBrand href="index.html">Twin Oaks</NavbarBrand>
        <Container>
            <NavbarToggler className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></NavbarToggler>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Rentals</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="properties.html">Properties</a></li>
                            <li><a class="dropdown-item" href="available.html">Available Soon</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <NavLink href="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact">Apply</NavLink>
                    </li>
                    <li>
                        <NavLink href="/">Tenants</NavLink>
                    </li>
                </ul>
                <Button className="btn btn-outline-dark" type="submit" href="/contact">
                    Contact Us
                </Button>
            </div>
        </Container>
    </Navbar>
  )
}

export default Navigation
