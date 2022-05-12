import React, {useState} from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import LatestProducts from './LatestProducts';

// Card Component
function LatestCardProducts(props) {

    // Hover Effect
    const [hover, setHover] = useState(false);
    function mouseOver() {
        setHover(true);
    }
    function mouseOut() {
        setHover(false)
    }


    return(
        <Card style={{ border: 'none', textAlign: 'center' }} className='mb-4' onMouseOver={mouseOver} onMouseOut={mouseOut}>
            {hover ? <Card.Img variant='top' className='card-img' src={props.img2} alt={props.alt} /> : <Card.Img variant='top' className='card-img' src={props.img} alt={props.alt} />}
            <Card.Body>
                <Card.Title className='roboto-bold'>{props.name}</Card.Title>
                <Card.Text>
                    <p className='rubik'>{props.price}</p>
                    <Button variant='outline-dark' className='btn btn-link roboto-bold' href='ecommerce/product/#' size='sm' style={{ fontWeight: 'bold', textDecoration: 'none', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0', color: '#000' }}>
                        {props.quickShop} <i class="fa fa-eye" aria-hidden="true" style={{ marginLeft: '.3rem' }}></i>
                    </Button>
                    <Button variant='outline-dark' className='btn btn-link roboto-bold' size='sm' style={{ fontWeight: 'bold', textDecoration: 'none', borderRight: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0', color: '#000' }}>
                        {props.cartButton} <i class="fa fa-shopping-cart" aria-hidden="true" style={{ marginLeft: '.3rem' }}></i>
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function LatestP() {

    return(
        <Container style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <Row>
                {LatestProducts.map((LatestProducts, k) => (
                    <Col key={k} lg={3} md={6} sm={12}>
                        <LatestCardProducts
                            img={LatestProducts.img}
                            img2={LatestProducts.img2}
                            alt={LatestProducts.alt}
                            name={LatestProducts.name}
                            price={LatestProducts.price}
                            quickShop={LatestProducts.quickShop}
                            cartButton={LatestProducts.cartButton}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default LatestP;