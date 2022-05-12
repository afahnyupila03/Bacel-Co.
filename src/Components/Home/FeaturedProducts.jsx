import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import featuredP from './featuredP';

// Card Component
function FeaturedProductCard(props) {

    // Hover Effect
    const [moused, setMoused] = useState(false);


    // Hover Effect Functions
    function mousedOn() {
        setMoused(true);
    }
    function mousedOut() {
        setMoused(false);
    }

    return(
        <Card className='rubik' style={{ border: 'none', marginBottom: '2rem', textAlign: 'left' }} onMouseOver={mousedOn} onMouseOut={mousedOut} >
            {moused ? <Card.Img variant="top" src={props.img2} alt={props.alt} className='card-img' /> : <Card.Img variant="top" src={props.img} alt={props.alt} className='card-img' />}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text >
                    {moused ? <a href='ecommmerce/bacel/#' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} className='text-danger' ><i class="fa fa-shopping-cart fa-1x" aria-hidden="true" style={{ marginRight: '.9rem' }}></i>Select options</a> : <p style={{fontWeight: 'bold'}}>{props.price}</p>}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

// Mapped Card Component
function FeaturedProducts() {

    return (
        <Container>
            <Row>
                {featuredP.map((featuredP, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                        <FeaturedProductCard
                            img={featuredP.img}
                            img2={featuredP.img2}
                            alt={featuredP.alt}
                            name={featuredP.name}
                            price={featuredP.price}
                        />
                    </Col>
                ) )}
            </Row>
        </Container>
    );
}

export default FeaturedProducts;