import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {

    return(
        <Container fluid className='roboto-bold' style={{ backgroundColor: '#2E2E2E' }} >
            <Container>
                <Row style={{paddingTop: '4rem'}}>
                    {/* Information */}
                    <div className='col-lg-3 col-md-6 col-sm-6 mb-5'>
                        <h6 style={{ fontWeight: 'bold', color: '#E6E6E6' }} >INFORMATION</h6>
                        <hr style={{ height: '.2rem', width: '1.5rem', color: '#E6E6E6' }} />
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>About Store</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>New Collection</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Woman Dress</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Contact Us</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Latest News</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Our Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    {/* useful links */}
                    <div className='col-lg-3 col-md-6 col-sm-6 mb-5'>
                        <h6 style={{ fontWeight: 'bold', color: '#E6E6E6' }} >USEFUL LINKS</h6>
                        <hr style={{ height: '.2rem', width: '1.5rem', color: '#E6E6E6' }} />
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Privacy Policy</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Returns</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Terms &amp; COndition</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Contact Us</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Latest News</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Our Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    {/* footer menu */}
                    <div className='col-lg-3 col-md-6 col-sm-6 mb-5'>
                        <h6 style={{ fontWeight: 'bold', color: '#E6E6E6' }} >FOOTER MENU</h6>
                        <hr style={{ height: '.2rem', width: '1.5rem', color: '#E6E6E6' }} />
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Instagram Profile</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>New Collection</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Woman Dress</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Contact Us</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Latest News</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html' style={{ color: '#BDBDBD' }}>Purchase Theme</a>
                            </li>
                        </ul>
                    </div>
                    {/* About Store */}
                    <div className='col-lg-3 col-md-6 col-sm-6 mb-5'>
                        <h6 style={{ fontWeight: 'bold', color: '#E6E6E6'  }} >ABOUT THE STORE</h6>
                        <hr style={{ height: '.2rem', width: '1.5rem', color: '#E6E6E6' }} />
                        <p style={{ fontSize: '1.2rem', color: '#BDBDBD' }}> STORE - nationwide fashion store since 2006. We sell over 1000+ branded products on our web-site. <br />
                            <i class="fa fa-location-arrow fa-lg" aria-hidden="true"></i>  Half-mile, Cameroon, Limbe. <br />
                            <i class="fa fa-mobile fa-lg" aria-hidden="true"></i> Phone: (662) 685-139. <br />
                            {/* payment methods */}
                            <ul style={{ marginTop: '1rem' }}>
                                <Link to='/'>
                                    <a href='ecommerce/visa_card' style={{ marginRight: '1rem', color: '#BDBDBD' }} ><i class="fa fa-cc-visa fa-lg" aria-hidden="true"></i></a>
                                </Link>
                                <Link to='/'>
                                    <a href='ecommerce/master_card' style={{ marginRight: '1rem', color: '#BDBDBD' }} ><i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i></a>
                                </Link>
                                <Link to='/'>
                                    <a href='ecommerce/paypal' style={{ marginRight: '1rem', color: '#BDBDBD' }} ><i class="fa fa-cc-paypal fa-lg" aria-hidden="true"></i></a>
                                </Link>
                                <Link to='/'>
                                    <a href='ecommerce/credit_card' style={{ marginRight: '1rem', color: '#BDBDBD' }} ><i class="fa fa-credit-card-alt fa-lg" aria-hidden="true"></i></a>
                                </Link>
                            </ul>
                        </p>
                    </div>

                    {/* Footer Social Media */}
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '3rem', color: '#E6E6E6' }}> Bacel &amp; Co<span>.</span> </h1>
                        <ul style={{ marginTop: '1rem' }}>
                            <a href='ecommerce/cameroon.org' style={{ marginRight: '2rem', color: '#BDBDBD' }}> <i class="fa fa-facebook fa-lg" aria-hidden="true"></i> </a>
                            <a href='ecommerce/cameroon.org' style={{ marginRight: '2rem', color: '#BDBDBD' }}> <i class="fa fa-twitter fa-lg" aria-hidden="true"></i> </a>
                            <a href='ecommerce/cameroon.org' style={{ marginRight: '2rem', color: '#BDBDBD' }}> <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i> </a>
                            <a href='ecommerce/cameroon.org' style={{ marginRight: '2rem', color: '#BDBDBD' }}> <i class="fa fa-pinterest fa-lg" aria-hidden="true"></i> </a>
                        </ul>
                    </div>
                    {/* Footer Text */}
                    <hr style={{ color: '#E6E6E6' }} />
                    <p style={{ fontSize: '1.5rem', textAlign: 'center', color: '#E6E6E6' }} >&copy; {new Date().getFullYear()} by PilaTech. Premium e-commerce solutions. </p>
                </Row>
            </Container>
        </Container>
    );

}

export default Footer;