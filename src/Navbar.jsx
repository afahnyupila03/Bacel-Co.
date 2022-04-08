import React, {useState} from 'react';
import {Navbar, Container, Nav, Form, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function CartUI() {

    // Cart Counter
    const [count, setCount] = useState(12);

    // Cart Counter Functions
    function AddCount() {
        setCount(count + 1);
    }

    return(
        <Link to='/cart'>
            <a class="nav-link" href='ecommerce/feature/cart' style={{ color: 'black' }} >
                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                <span class=" top-0 start-100 translate-middle badge rounded-pill bg-dark" onChecked={AddCount}>
                    {count}
                </span>
            </a>
        </Link>
    );
}

function NavBar() {
    return(
        <Navbar bg="warning" expand="lg" fixed='top'>
            <Container >
                <Navbar.Brand href="#">Basel &amp; Co.</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-10 my-lg-10 justify-content-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">
                            <Link to='/'>HOME</Link>
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Link to='/product'>PRODUCTS</Link>
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Link to='/promotion'>PROPMOTION</Link>
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Link to='/'>PAGES</Link>
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Link to='/blog'>BLOG</Link>
                        </Nav.Link>
                        <Nav.Link href="#action2">
                            <Link to='/contact'>CONTACT</Link>
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <NavDropdown title="Account" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    <Link to='/login'>
                                        LOGIN
                                    </Link>
                                </NavDropdown.Item>
                            <NavDropdown.Item href="#action4" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                <Link to='/register'>
                                    REGISTER
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                            <a class="nav-link" href='ecommerce/whislist' style={{color: 'black'}} >
                                <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                                <span class="top-0 start-100 translate-middle badge rounded-pill bg-dark">
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