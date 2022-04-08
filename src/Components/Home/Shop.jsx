import React from 'react';
import { Button } from 'react-bootstrap';

const backgroundStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/2447042/pexels-photo-2447042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
    backgroundRepeat: 'no-repeat',
    height: '450px',
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center'
};



function Shop() {
    return(
        <div className='contianer-fluid' style={backgroundStyle}>
            <div>
                <h4>About the shop</h4>
                <span>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                </span>
                <p>
                    <span>Bacel &amp; Company</span> - 
                    is a famous nationwide fashion stores
                </p>
                <Button variant='outline-dark' size='lg' type='button' className='m-auto align-self-center d-flex'>
                    <a href='ecommerce/bacel/#' style={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}>SHOP</a>
                </Button>
            </div>
        </div>
    );
}

export default Shop;