import { Navbar as BootstrapNavBar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
    return(
        <div>
                <BootstrapNavBar bg="light" expand="lg">
                    <Container>
                    <BootstrapNavBar.Brand href="#home">Aroma-Home</BootstrapNavBar.Brand>
                    <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
                    <BootstrapNavBar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    </BootstrapNavBar.Collapse>
                    </Container>
                </BootstrapNavBar>
        </div>
    )
}

export default Navbar