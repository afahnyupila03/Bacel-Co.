import React from 'react';
import LatestCard from './latestCard';
import { Col, Card, Row } from 'react-bootstrap';


function Latest() {

    return(
        <Row>
            {LatestCard.map((latestCard, k) => (
                <Col key={k} xs={12} md={4} lg={4} >
                    <Card className='mb-4' style={{border: 'none'}}>
                        <Card.Img variant="top" src={latestCard.img} alt={latestCard.alt} className='card-img' />
                        <Card.Body style={{textAlign: 'center'}}>
                            <Card.Title className='roboto-condensed'><h3>{latestCard.title}</h3></Card.Title>
                            <Card.Text className='rubik'>
                                <p>By <a href='ecommerce/bacel/#' style={{ color: 'green', textDecoration: 'none'}} >{latestCard.writer}</a> / {latestCard.comment}</p>
                                <p>{latestCard.text}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Latest;