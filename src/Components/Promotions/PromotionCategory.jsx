import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'
import CategoryPromotions from './CategoryPromotions';

function CategoryCard(props) {
    return(
        <Container>
            <Card className='rubik' style={{ border: 'none', textAlign: 'center' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    
                    <Card.Link href="#" style={{ textDecoration: 'none', color: '#2E2E2E'  }}>
                        <Card.Title>{props.title}</Card.Title>
                        EXPLORE NOW <i class="fa fa-angle-right" aria-hidden="true"></i> 
                    </Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

function PromotionCategory() {
    return(
        <Container style={{marginTop: '5rem'}}>
            <Row>
                {CategoryPromotions.map((promotion, k) => (
                    <Col key={k} lg={4} md={4} sm={6} >
                        <CategoryCard 
                            img={promotion.img}
                            title={promotion.title}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default PromotionCategory;