import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.scss';
import ButtonPrimary from './Button';


const Header = () => {
    const toggle_nav = () => {
        document.getElementById('header_container').classList.toggle('openNav')
    }


    return(
        <header>
        <Navbar bg="light" expand="lg" className='fixed-top z-5 bg-white' id='header_container' style={{zIndex:'99'}}>
        <Container>
            <Navbar.Brand href="/">
                <svg>
                    <use href='#logo'></use>
                </svg>
            </Navbar.Brand>
            <Nav className='fw-bold gap-lg-4' id='header_nav'>
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
            <Button className='menu_toggle bg-transparent d-lg-none' onClick={toggle_nav}>
                <svg id='menu'>
                    <use href='#icon-hamburger'></use>
                </svg>
                <svg id='close'>
                    <use href='#icon-close'></use>
                </svg>
            </Button>
            <ButtonPrimary addClass={'d-none d-lg-block'} />
      </Container>
    </Navbar>
    <div id='modal' className='d-none fixed-top ' style={{zIndex:'9'}}></div>
    </header>
    )
}

export default Header;