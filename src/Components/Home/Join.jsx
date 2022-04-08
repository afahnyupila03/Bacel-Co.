import React from 'react';

const myStyle = {    
    backgroundImage: "url('https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    backgroundRepeat: 'no-repeat',
    height: '30rem',
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center',
};

const borderStyle = {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    background: 'transparent'
};

function Join() {
    return(
        <div className='container-fluid' style={myStyle}>
            <div className='row'>
                <form style={{marginTop: '8rem'}}>
                    <h5>Connect to Bacel &amp; Co.</h5>
                    <h1>Join our Newsletter</h1>
                    <p>Hey you, sign up it only takes a second to be the first to find out about our latest news and promotions</p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Your email address" aria-label="Recipient's username" aria-describedby="button-addon2" style={borderStyle} />
                        <button class="btn btn-light" type="button" id="button-addon2">SIGN UP</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Join;