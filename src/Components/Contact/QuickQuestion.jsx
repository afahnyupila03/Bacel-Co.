import React from 'react';
import { Container, Button } from 'react-bootstrap';

function QuickQuestion() {
    return (
        <Container className='mb-5 my-5'>
            <h1 className='roboto-condensed' style={{fontWeight: 'bold'}}>GOT A QUICK QUESTION?</h1>
            <p>
                The answers to many commonly asked questions can be found 
                in our new Customer Service Knowledge Base! Click the link 
                below and find the information you need without submitting 
                a support ticket.
            </p>
            <Button variant="dark">
                <a href="https://www.bacel.com/support/knowledgebase" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'white'}} >
                    VISIT OUR KNOWLEDGE BASE
                </a>
            </Button>
        </Container>
    );
}

export default QuickQuestion;