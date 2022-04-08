import React from 'react';
import category, {category2} from './category.js';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';


function Featured() {

    return(
        <Container>
            <Row>
                {category.map((category, k) => (
                    <Col key={k} lg={3} md={6} sm={12}>
                        <Card style={{ marginBottom: '4rem', border: 'none', textAlign: 'center' }}>
                            <Card.Img variant="top" src={category.img} className='card-img' />
                            <Card.Body>
                                <Card.Title className='mb-4' >{category.products}</Card.Title>
                                <Button variant="outline-dark" size='lg'>{category.button}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

function Featured2(props) {
    return(
        <Container>
            <Row >
                {category2.map((category2, k) => (
                    <Col lg={6} md={6} sm={12} >
                        <Card className='card align-self-center d-flex m-auto' style={{ marginBottom: '4rem', border: 'none', textAlign: 'center' }}>
                            <img src={category2.img} alt={category2.alt} className='card-img m-auto align-self-center d-flex' />
                            <Card.Body>
                                <Card.Title>{category2.products}</Card.Title>
                                <Button variant="outline-dark">{category2.button}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Featured;
export {Featured2};