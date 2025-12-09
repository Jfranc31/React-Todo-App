import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <BootstrapNavbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <BootstrapNavbar.Brand as={Link} to='/todos'>
                    Todo App
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
                <BootstrapNavbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/todos'>
                            Todos
                        </Nav.Link>
                        <Nav.Link as={Link} to='/about'>
                            About
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;