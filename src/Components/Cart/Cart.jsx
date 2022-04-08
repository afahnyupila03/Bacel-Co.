import React from 'react';
import { Container } from 'react-bootstrap';
import LatestP from '../Home/LatestP';
import CartItems from './cartItems';

function Cart() { 
    return(
        <Container style={{ marginTop: '5rem', marginBottom: '4rem' }}>
            <h3>Shopping Cart</h3>
            <CartItems />

            {/* Latest Products */}
                <h2 style={{ textAlign: 'left', marginTop: '10rem' }}>Latest Arrivals</h2>
                <hr style={{ marginTop: '1rem' }} />
                <LatestP />

        </Container>
    );
}

export default Cart;