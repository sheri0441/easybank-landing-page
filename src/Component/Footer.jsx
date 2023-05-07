import Container from 'react-bootstrap/Container';
import ButtonPrimary from './Button'
import './Footer.scss'

const Footer = () => {
    return(
        <footer className='py-4 py-lg-5' style={{backgroundColor: 'var(--clr-pr-db)'}}>
            <Container className='d-lg-flex justify-content-lg-between'>
                <div className='d-lg-flex'>               
                    <div>
                        <div id='footerLogo'>
                            <a href="/"><svg style={{width:'140px', height: '20px'}}>
                                <use href='#footer-logo'></use>
                            </svg></a>
                        </div>

                        <div id='social-link' className='mt-4 mt-lg-5'>
                            <svg>
                                <use href='#icon-facebook'></use>
                            </svg>
                            <svg>
                                <use href='#icon-youtube'></use>
                            </svg>
                            <svg>
                                <use href='#icon-twitter'></use>
                            </svg>
                            <svg>
                                <use href='#icon-pinterest'></use>
                            </svg>
                            <svg>
                                <use href='#icon-instagram'></use>
                            </svg>
                        </div>
                    </div>

                    <ul class="navbar-nav mt-4 mt-lg-0 d-lg-flex flex-lg-wrap">
                        <li class="nav-item">
                            <a class="nav-link" href="/">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Blog</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-lg-flex flex-lg-wrap">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Careers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Support</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                <div className='mt-4 mt-lg-0'>
                    <ButtonPrimary />
                    <p className='mt-4'>© Easybank. All Rights Reserved</p>
                </div>

            </Container>
        </footer>
    )
}

export default Footer;