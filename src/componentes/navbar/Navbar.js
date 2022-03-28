import { Navbar as BootstrapNavBar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './Navbar.css';

const Navbar = () => {
    return(
        <div>
            <BootstrapNavBar bg="light" expand="lg">
                <Container>
                <Link to="/" className='navbar-brand'>Aroma</Link>
                <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavBar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="Navbar-brand">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/productos/difusores"className='nav-link' >Difusores</Link>
                    <Link to="/productos/aromatizantes" className='nav-link'>Aromatizantes</Link>
                    <Link to="/productos/jabones" className='nav-link'>Jabones</Link>
                    <Link to="/cart" className='nav-link text-success text-big'><CartWidget /></Link>
                </Nav>
                </BootstrapNavBar.Collapse>
                </Container>
            </BootstrapNavBar>
        </div>
    )
}

export default Navbar