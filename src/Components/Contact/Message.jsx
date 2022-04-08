import React, {useState} from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

function Message() {

    const [userInfor, setuserInfor] = useState({
        name: '',
        email: '',
        telephone: '',
        comment: ''
    });

    function handleChange(event) {
        const {value, name} = event.target;
        setuserInfor( (prevValue) => {
            if (name === 'name') {
                return {
                    name: value,
                    email: prevValue.email,
                    telephone: prevValue.telephone,
                    comment: prevValue.comment
                }
            } else if (name === 'email') {
                return {
                    name: prevValue.name,
                    email: value,
                    telephone: prevValue.telephone,
                    comment: prevValue.comment
                }
            } else if (name === 'telephone') {
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    telephone: value,
                    comment: prevValue.comment
                }
            } else if (name === 'comment') {
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    telephone: prevValue.telephone,
                    comment: value
                }
            }
        });
    }

    return(
        <Container className='mb-5'>
            <Row className='mx-auto mb-6 px-auto'>
                {/* Form */}
                <Col>
                    <Form>
                        <h3 style={{ fontWeight: 'bold' }}>SEND A MESSAGE...</h3>
                        <p className='text-danger'> <span>*</span> Required Fields</p>

                        {/* Name */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <span className='text-danger'>*</span> Name</Form.Label>
                            <Form.Control type="text" name='name' value={userInfor.name} onChange={handleChange} placeholder="Name" />
                        </Form.Group>

                        {/* Email */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <span className='text-danger'>*</span> Email address</Form.Label>
                            <Form.Control type="email" name='email' value={userInfor.email} onChange={handleChange} placeholder="Enter email" />
                        </Form.Group>

                        {/* Telephone */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type='tel' name='telephone' value={userInfor.telephone} onChange={handleChange} />
                        </Form.Group>

                        {/* Comment */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><span className='text-danger'>*</span> Comment</Form.Label>
                            <Form.Control type="text" name='comment' value={userInfor.comment} onChange={handleChange} style={{height: '10rem'}} />
                        </Form.Group>

                        {/* Button */}
                        <Button variant="warning" type="submit" style={{width: '5rem'}}>
                            SEND
                        </Button>
                    </Form>
                </Col>

                {/* Quick Tip */}
                <Col style={{ textAlign: 'center' }} className='my-5' >
                    <h2 className='text-danger' style={{ fontWeight: 'bold' }}>QUICK TIP</h2>
                    <h4 style={{ fontWeight: 'bold' }}>HOW TO CHECK YOUR ORDER STATUS</h4>
                    <p>
                        To quickly get the status of your order 
                        <a href='ecommere/bacel/#' className='text-danger'>click here</a> 
                        or use the Track My Order link 
                        in the footer. Next, enter your SWISSGEAR order ID# (the number found in your 
                        confirmation email), last name, and zip code. Then click the continue button to 
                        display your order status and tracking information.
                    </p>
                    <h4 style={{ fontWeight: 'bold' }}>HOW TO RETURN YOUR ORDER</h4>
                    <p>
                        Returning a recently purchased item? No problem! Just visit 
                        <a href='ecommerce/bacel/#' className='text-danger'>https://rma.swissgear.com</a>
                        to get started with your return. We will ask a few simple questions 
                        to get a better idea of the issue and how to best process your return. 
                        Once approved you will be provided with a return label and packing instructions 
                        for your return shipment.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Message;