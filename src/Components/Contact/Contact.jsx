import React from 'react';
import QuickQuestion from './QuickQuestion';
import { Container } from 'react-bootstrap';
import Message from './Message';

function Contact() { 
    return(
        <Container className='my-5'>
            <h1 className='roboto-bold' style={{textAlign: 'center', paddingTop: '4rem', paddingBottom: '2rem'}}>Contact Bacel & Co.</h1>
            {/* Quick Question */}
            <QuickQuestion />
            {/* Message and Quick Tip */}
            <Message />
        </Container>
    );
}

export default Contact;