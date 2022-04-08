import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MainBlog from './MainBlog';

function Blog() {
    return(
        <Container style={{marginTop: '10rem', marginBottom: '10rem'}}>
            <Row>
                {MainBlog.map((MainBlog, k) => (
                    <Col key={k} lg={4} md={4} sm={12}>
                        <Card style={{ marginBottom: '4rem', border: 'none', textAlign: 'center' }}>
                            <Card.Img variant="top" src={MainBlog.img} className='card-img' />
                            <Card.Body>
                                <Card.Title><h3>{MainBlog.title}</h3></Card.Title>
                                <Card.Text>
                                    <p>By <a href='ecommerce/bacel/#'>{MainBlog.writer}</a> / {MainBlog.comment}</p>
                                    <p>{MainBlog.text}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Blog;