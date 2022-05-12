import React from 'react';
import { Container } from 'react-bootstrap';
import PromotionItems from './PromotionItems';
import PromotionCategory from './PromotionCategory';


function Promotion() {
    return (
        <Container fluid>
            <div className='roboto-bold' style={{marginTop: '5rem', textAlign: 'center'}}>
                <h1>TRAVEL ACCESSORIES</h1>
                <h4>TYPE, FEATURES & COLLECTIONS</h4>
            </div>
            <PromotionCategory />
            <PromotionItems />
        </Container>
    );
}

export default Promotion;