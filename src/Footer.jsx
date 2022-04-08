import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {

    return(
        <Container fluid className='bg-warning' style={{paddingTop: '2rem'}}>
            <div className='container' style={{ paddingBottom: '-32rem', marginTop: '5rem' }}>
                <div className='row'>
                    {/* Information */}
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <h6 style={{ fontWeight: 'bold' }} >INFORMATION</h6>
                        <hr style={{ height: '.2rem', width: '1.5rem' }} />
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>About Store</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>New Collection</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Woman Dress</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Contact Us</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Latest News</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Our Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    {/* useful links */}
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <h6 style={{ fontWeight: 'bold' }} >USEFUL LINKS</h6>
                        <hr style={{ height: '.2rem', width: '1.5rem' }} />
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Privacy Policy</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Returns</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Terms &amp; COndition</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Contact Us</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Latest News</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Our Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    {/* footer menu */}
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <h6 style={{ fontWeight: 'bold' }} >FOOTER MENU</h6>
                        <hr style={{ height: '.2rem', width: '1.5rem' }} />
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Instagram Profile</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>New Collection</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Woman Dress</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Contact Us</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Latest News</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='html'>Purchase Theme</a>
                            </li>
                        </ul>
                    </div>
                    {/* About Store */}
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <h6 style={{ fontWeight: 'bold' }} >ABOUT THE STORE</h6>
                        <hr style={{ height: '.2rem', width: '1.5rem' }} />
                        <p style={{ fontSize: '1.2rem' }}> STORE - nationwide fashion store since 2006. We sell over 1000+ branded products on our web-site. <br />
                            <i class="fa fa-location-arrow fa-lg" aria-hidden="true"></i>  Half-mile, Cameroon, Limbe. <br />
                            <i class="fa fa-mobile fa-lg" aria-hidden="true"></i> Phone: (662) 685-139. <br />
                            {/* payment methods */}
                            <ul style={{ marginTop: '1rem' }}>
                                <Link to='/'>
                                    <a href='ecommerce/visa_card' style={{ marginRight: '1rem' }} ><i class="fa fa-cc-visa fa-lg" aria-hidden="true"></i></a>
                                </Link>
                                <Link to='/'>
                                    <a href='ecommerce/master_card' style={{ marginRight: '1rem' }} ><i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i></a>
                                </Link>
                                <Link to='/'>
                                    <a href='ecommerce/paypal' style={{ marginRight: '1rem' }} ><i class="fa fa-cc-paypal fa-lg" aria-hidden="true"></i></a>
                                </Link>
                                <Link to='/'>
                                    <a href='ecommerce/credit_card' style={{ marginRight: '1rem' }} ><i class="fa fa-credit-card-alt fa-lg" aria-hidden="true"></i></a>
                                </Link>
                            </ul>
                        </p>
                    </div>

                    {/* Footer Social Media */}
                    <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '3rem' }}> Bacel &amp; Co<span>.</span> </h1>
                        <ul style={{ marginTop: '1rem' }}>
                            <a href='ecommerce/cameroon.org' style={{ marginRight: '3rem', marginLeft: '' }}> <i class="fa fa-facebook fa-lg" aria-hidden="true"></i> </a>
                            <a href='ecommerce/cameroon.org' style={{ marginRight: '3rem' }}> <i class="fa fa-twitter fa-lg" aria-hidden="true"></i> </a>
                            <a href='ecommerce/cameroon.org' style={{ marginRight: '3rem' }}> <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i> </a>
                            <a href='ecommerce/cameroon.org' style={{ marginRight: '3rem' }}> <i class="fa fa-pinterest fa-lg" aria-hidden="true"></i> </a>
                        </ul>
                    </div>
                    {/* Footer Text */}
                    <hr />
                    <p style={{ fontSize: '1.5rem', textAlign: 'center', marginTop: '2rem' }} >&copy; {new Date().getFullYear()} by PilaTech. Premium e-commerce solutions. </p>
                </div>
            </div>
        </Container>
    );

}

export default Footer;