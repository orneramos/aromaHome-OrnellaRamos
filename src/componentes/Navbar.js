import { Navbar as BootstrapNavBar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './Navbar.css';

const Navbar = () => {
    return(
        <div>
                <BootstrapNavBar bg="light" expand="lg">
                    <Container>
                    <BootstrapNavBar.Brand href="#home">Aroma</BootstrapNavBar.Brand>
                    <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
                    <BootstrapNavBar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="Navbar-brand">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <Nav.Link href="#home"><CartWidget /></Nav.Link>
                    </Nav>
                    </BootstrapNavBar.Collapse>
                    </Container>
                </BootstrapNavBar>
        </div>
    )
}

export default Navbar