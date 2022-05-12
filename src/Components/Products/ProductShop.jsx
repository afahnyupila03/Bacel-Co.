import React, { useState } from 'react';
import { Container, Card, Row, Button, Col } from 'react-bootstrap';
import ProductList from './ProductList.js';

function CartUI(props) {

    const [hover, setHover] = useState(false);

    function mouseOver() {
        setHover(true);
    }
    function mouseOut() {
        setHover(false);
    }

    return(
        <Card className='mb-5 roboto-bold' style={{border: 'none', textAlign: 'center'}} onMouseOver={mouseOver} onMouseOut={mouseOut}>
            {hover ? <Card.Img variant="top" src={props.img2} className='card-img' alt={props.alt} /> : <Card.Img variant="top" src={props.img} className='card-img' alt={props.alt} />}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.price}
                </Card.Text>
                <Button variant="warning">Add to Cart<i class="fa fa-shopping-cart fa-1x" aria-hidden="true" style={{ marginLeft: '1rem' }}></i></Button>
            </Card.Body>
        </Card>
    );
}

function ProductShop() { 
    return(
        <Container style={{ marginTop: '10rem' }}>
            <Row>
                {ProductList.map((productCards, k) => (
                    <Col key={k} lg={3} md={4} sm={2}>
                        <CartUI 
                            img={productCards.img}
                            img2={productCards.img2}
                            name={productCards.name}
                            price={productCards.price}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductShop;