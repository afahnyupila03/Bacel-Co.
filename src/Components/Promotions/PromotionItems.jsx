import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import PromotionProducts from './PromotionProducts.js';

function CardUI(props) {

    const [hover, setHover] = useState(false);

    function mouseOver() {
        setHover(true);
    }
    function mouseOut() {
        setHover(false);
    }

    return (
        <Card onMouseOver={mouseOver} onMouseOut={mouseOut} className='mb-4 rubik' style={{ border: 'none' }} >
            {hover ? <Card.Img variant="top" src={props.img2} alt={props.alt} className='card-img' style={{ backgroundColor: 'gray ' }} /> : <Card.Img variant="top" src={props.img} alt={props.alt} className='card-img' />}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.price}
                </Card.Text>
                <Button variant="warning" style={{color: '#2E2E2E'}}>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

function PromotionItems() {
    return(
        <Container fluid style={{ textAlign: 'left', backgroundColor: 'light', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row>
                {PromotionProducts.map((promotion, k) => (
                    <Col key={k} lg={3} md={4} sm={6} >
                        <CardUI
                            img={promotion.img}
                            img2={promotion.img2}
                            alt={promotion.alt}
                            name={promotion.name}
                            price={promotion.price}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PromotionItems;