import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function CartItems() {

    const [number, setNumber] = useState(1)

    function addNumber() {
        setNumber(number + 1);
    }
    function reduceNumber() {
        setNumber(number - 1);
    }

    return(
        <Container>
            {/* First Item */}
            <div class="card mb-3" style={{ maxWidth: "50rem", borderLeft: 'none', borderRight: 'none', marginTop: '2rem' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src='https://basel-cec2.kxcdn.com/basel/wp-content/uploads/2015/10/woman-2.jpg' class="img-fluid" alt='gthnic_jacket' style={{ width: '15rem', marginTop: '1rem', marginBottom: '1rem' }} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Gthnic detail open jacket</h5>
                            <p class="card-text">
                                {/* Ratings */}
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '1rem' }}>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </span>
                                3.5/5 ratings
                            </p>
                            {/* Product Amount */}
                            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                <p>
                                    4,000.00 CFA Frs
                                </p>
                            </div>
                            <div className='d-flex'>
                                {/* Product Counter */}
                                <Button variant='light' size='sm' onClick={addNumber}>
                                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                                </Button>
                                <input type='text' value={number} style={{ textAlign: 'center', width: '5rem', border: 'none' }} className='bg-light' />
                                <Button variant='light' size='sm' onClick={reduceNumber} style={{ marginRight: '1rem' }}>
                                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                </Button>
                                <Button variant='outline-light' size='sm' type='submit' className='text-danger' style={{ borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0', borderColor: 'light' }}>Delete</Button>
                                <Button variant='outline-light' size='sm' type='submit' className='text-danger' style={{ borderRight: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0', borderColor: 'light' }}>Save for Later</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Item */}
            <div class="card mb-3" style={{ maxWidth: "50rem", borderLeft: 'none', borderRight: 'none', marginTop: '2rem' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src='https://basel-cec2.kxcdn.com/basel/wp-content/uploads/2015/10/woman-2.jpg' class="img-fluid" alt='gthnic_jacket' style={{ width: '15rem', marginTop: '1rem', marginBottom: '1rem' }} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Gthnic detail open jacket</h5>
                            <p class="card-text">
                                {/* Ratings */}
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '1rem' }}>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </span>
                                3.5/5 ratings
                            </p>
                            {/* Product Amount */}
                            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                <p>
                                    4,000.00 CFA Frs
                                </p>
                            </div>
                            <div className='d-flex'>
                                {/* Product Counter */}
                                <Button variant='light' size='sm' onClick={addNumber}>
                                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                                </Button>
                                <input type='text' value={number} style={{ textAlign: 'center', width: '5rem', border: 'none' }} className='bg-light' />
                                <Button variant='light' size='sm' onClick={reduceNumber} style={{ marginRight: '1rem' }}>
                                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                </Button>
                                <Button variant='outline-light' size='sm' type='submit' className='text-danger' style={{ borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0', borderColor: 'light' }}>Delete</Button>
                                <Button variant='outline-light' size='sm' type='submit' className='text-danger' style={{ borderRight: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0', borderColor: 'light' }}>Save for Later</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Item */}
            <div class="card mb-3" style={{ maxWidth: "50rem", borderLeft: 'none', borderRight: 'none', marginTop: '2rem' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src='https://basel-cec2.kxcdn.com/basel/wp-content/uploads/2015/10/woman-2.jpg' class="img-fluid" alt='gthnic_jacket' style={{ width: '15rem', marginTop: '1rem', marginBottom: '1rem' }} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Gthnic detail open jacket</h5>
                            <p class="card-text">
                                {/* Ratings */}
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '.5rem' }}>
                                    <i class="fa fa-star-half-o text-warning" aria-hidden="true"></i>
                                </span>
                                <span style={{ marginRight: '1rem' }}>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </span>
                                3.5/5 ratings
                            </p>
                            {/* Product Amount */}
                            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                <p>
                                    4,000.00 CFA Frs
                                </p>
                            </div>
                            <div className='d-flex'>
                                {/* Product Counter */}
                                <Button variant='light' size='sm' onClick={addNumber}>
                                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                                </Button>
                                <input type='text' value={number} style={{ textAlign: 'center', width: '5rem', border: 'none' }} className='bg-light' />
                                <Button variant='light' size='sm' onClick={reduceNumber} style={{ marginRight: '1rem' }}>
                                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                </Button>
                                <Button variant='outline-light' size='sm' type='submit' className='text-danger' style={{ borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0', borderColor: 'light' }}>Delete</Button>
                                <Button variant='outline-light' size='sm' type='submit' className='text-danger' style={{ borderRight: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0', borderColor: 'light' }}>Save for Later</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
}

export default CartItems;