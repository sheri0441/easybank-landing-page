import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from '../assets/images/logo.svg'

import './Header.scss';


const Header = () => {
    return(
        <>
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">
            <svg>
                <use href='#logo'
                ></use>
            </svg>
            </Navbar.Brand>
        <Nav className='sh_nav'>
            <Nav.Link>
                Home
            </Nav.Link>
            <Nav.Link>
                About
            </Nav.Link>
            <Nav.Link>
                Contact
            </Nav.Link>
            <Nav.Link>
                Blog
            </Nav.Link>
            <Nav.Link>
                Careers
            </Nav.Link>
        </Nav>
        <Button className='rounded-pill btn-sm py-2 px-4 fs-sm fw-bold btn-gadient' >Request Invite</Button>
      </Container>
    </Navbar>

    
    </>
    )
}

export default Header;