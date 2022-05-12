import React, {useState} from 'react';
import { Container, Form, Button, FormCheck, Row, Col } from 'react-bootstrap';

function RegisterInfo() {

    // Register Information
    const [registerInfor, setRegisterInfor] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    function handleChange(event) {
        const {value, name} = event.target;
        setRegisterInfor(prevValue => { 
            if (name === 'firstName') {
                return {
                    firstName: value,
                    lastName: prevValue.lastName,
                    email: prevValue.email,
                    password: prevValue.password,
                    confirmPassword: prevValue.confirmPassword
                };
            } else if (name === 'lastName') {
                return {
                    firstName: prevValue.firstName,
                    lastName: value,
                    email: prevValue.email,
                    password: prevValue.password,
                    confirmPassword: prevValue.confirmPassword
                };
            } else if (name === 'email') {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    email: value,
                    password: prevValue.password,
                    confirmPassword: prevValue.confirmPassword
                };
            } else if (name === 'password') {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    email: prevValue.email,
                    password: value,
                    confirmPassword: prevValue.confirmPassword
                };
            } else if (name === 'confirmPassword') {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    email: prevValue.email,
                    password: prevValue.password,
                    confirmPassword: value
                };
            }
        });
    }

    return(
        <Container style={{ fontSize: '1.2rem' }}>
            <Row>
                <Col sm={6} md={4} style={{textAlign: 'center'}}>
                    {/* Form */}
                    <Form autocomplete='on' style={{ paddingBottom: '6rem' }}>
                        <h1 className='hind' style={{ paddingTop: '6rem' }}>CREATE AN ACCOUNT</h1>
                        <p style={{ paddingTop: '2rem' }} className='rubik'>Please enter the following information to create your account.</p>
                        <p className='text-danger rubik'> <span>*</span> Required Fields</p>
                        {/* firstName */}
                        <Form.Group className="mb-3 rubik" controlId="formBasicEmail">
                            <Form.Label> <span className='text-danger'>*</span> First Name</Form.Label>
                            <Form.Control type="text" name='firstName' value={registerInfor.firstName} onChange={handleChange} style={{ width: '25rem' }} required />
                        </Form.Group>

                        {/* lastName */}
                        <Form.Group className="mb-3 rubik" controlId="formBasicEmail">
                            <Form.Label> <span className='text-danger'>*</span> Last Name</Form.Label>
                            <Form.Control type="text" name='lastName' value={registerInfor.lastName} onChange={handleChange} style={{ width: '25rem' }} required />
                        </Form.Group>

                        {/* Email */}
                        <Form.Group className="mb-3 rubik" controlId="formBasicEmail">
                            <Form.Label> <span className='text-danger'>*</span> Email address</Form.Label>
                            <Form.Control autocomplete='off' type="email" name='email' value={registerInfor.email} onChange={handleChange} style={{ width: '25rem' }} required />
                        </Form.Group>

                        {/* Password */}
                        <Form.Group className="mb-3 rubik" controlId="formBasicEmail">
                            <Form.Label> <span className='text-danger'>*</span> password</Form.Label>
                            <Form.Control type='password' name='password' value={registerInfor.password} onChange={handleChange} style={{ width: '25rem' }} required />
                        </Form.Group>

                        {/* Confirm Password */}
                        <Form.Group className="mb-3 rubik" controlId="formBasicEmail">
                            <Form.Label> <span className='text-danger'>*</span> Confrim Password</Form.Label>
                            <Form.Control type='password' name='confirmPassword' value={registerInfor.confirmPassword} onChange={handleChange} style={{ width: '25rem' }} required />
                        </Form.Group>

                        {/* Checkbox */}
                        <Form.Group className="mb-3 rubik" controlId="formBasicEmail">
                            <FormCheck type={'checkbox'} label='Sign Up for Newsletter' required />
                            <FormCheck type={'checkbox'} label='I agree to the terms and conditions' required />
                        </Form.Group>

                        {/* Button */}
                        <Button variant="dark" className='rubik' type="submit" style={{ width: '5rem' }}>
                            SEND
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterInfo;