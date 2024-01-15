import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const theme = 'dark'

function NavBar() {

    const navbarBrand = <Navbar.Brand href="#home">Data Visualizer</Navbar.Brand>;
    const navbarToggle = <Navbar.Toggle aria-controls="basic-navbar-nav" />;
    const navbarLinks = (
        <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Information</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );

    return (
        <Navbar expand="lg" data-bs-theme={theme}>
            <Container>
                {navbarBrand}
                {navbarToggle}
                <Navbar.Collapse id="basic-navbar-nav">
                    {navbarLinks}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;