import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import warranty from './Warranty';

function WarrantyBar(){
    return(
        <Container fluid style={{backgroundColor: 'gray', padding: '5rem', marginBottom: '10rem'}}>
            <Container>
                <Row>
                    {warranty.map((warrant, k) => (
                        <Col key={k} lg={3} md={6} sm={12} style={{ backgroundColor: 'gray' }}>
                            <div class="card" style={{border: 'none', backgroundColor: 'gray'}}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        {warrant.icon}
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title" style={{fontSize: '1rem'}}>{warrant.title}</h5>
                                            <p class="card-text">
                                                {warrant.text} 
                                            </p>
                                            <a href='ecommerce/bacel/#' style={{ textDecoration: 'none', fontSize: '.9rem', color: '#424242'}}>{warrant.link}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default WarrantyBar;