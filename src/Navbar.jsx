import React from 'react';
import {Navbar, Container, Nav, Form, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function CartUI() {

        return(
            <Link to='/cart'>
                <a class="nav-link" href='ecommerce/feature/cart' style={{ color: '#E6E6E6' }} >
                <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                <span class=" top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    12
                </span>
            </a>
        </Link>
    );
}

function NavBar() {

    // Cart Counter
    const [count, setCount] = React.useState(0);
    function addCount() {
        setCount(count + 1);
    }

    return(
        <Navbar style={{ backgroundColor: '#2E2E2E'}} expand="lg" fixed='top'>
            <Container >
                <Navbar.Brand href="#" className='roboto-bold' style={{ color: '#E6E6E6' }} >Basel &amp; Co.</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-10 my-lg-10 justify-content-center roboto-bold"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">
                            <Link to='/' style={{ color: '#E6E6E6', textDecoration: 'none' }}>HOME</Link>
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Link to='/product' style={{ color: '#E6E6E6', textDecoration: 'none' }}>PRODUCTS</Link>
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Link to='/promotion' style={{ color: '#E6E6E6', textDecoration: 'none' }}>PROPMOTION</Link>
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Link to='/' style={{ color: '#E6E6E6', textDecoration: 'none' }}>PAGES</Link>
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Link to='/blog' style={{ color: '#E6E6E6', textDecoration: 'none' }}>BLOG</Link>
                        </Nav.Link>
                        <Nav.Link href="#action2">
                            <Link to='/contact' style={{ color: '#E6E6E6', textDecoration: 'none' }}>CONTACT</Link>
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex roboto-bold text-danger">
                        <NavDropdown title={"Account"} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3" style={{ textAlign: 'center' }}>
                                <Link to='/login' style={{ color: '#2E2E2E', textDecoration: 'none' }}>
                                        LOGIN
                                    </Link>
                                </NavDropdown.Item>
                            <NavDropdown.Item href="#action4" style={{ textAlign: 'center' }}>
                                <Link to='/register' style={{ color: '#2E2E2E', textDecoration: 'none' }}>
                                    REGISTER
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <a class="nav-link" href='ecommerce/whislist' style={{ color: '#E6E6E6'}} >
                                <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
                                <span class="top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    0
                                </span>
                            </a>
                            
                            {/* CartUI */}
                            <div>
                                <CartUI /> 
                            </div>
                            
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;