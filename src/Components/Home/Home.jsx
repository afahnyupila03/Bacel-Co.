import React, {useState} from 'react';
import Featured, { Featured2 } from './Featured';
import FeaturedProducts from './FeaturedProducts';
import Join from './Join';
import Latest from './Latest';
import Shop from './Shop';
import { Button, Container } from 'react-bootstrap';
import Banner from './Banner';
import LatestP from './LatestP';
import WarrantyBar from './WarrantyBar';

function Home() { 

    // Hover Effect
    const [hover, setHover] = useState(false);
    function mouseOver() {
        setHover(true);
    }
    function mouseOut() {
        setHover(false);
    }

    return(
        <div>
            <Banner />
            {/* Featured Categories */}

            {/* Featured Category 1 */}
            <Container>
                <div className='roboto-condensed'>
                    <h2 style={{ textAlign: 'left', marginTop: '4rem' }}>FEATURED CATEGORIES</h2>
                    <hr style={{ marginBottom: '1rem' }} />
                </div>

                {/* Featured Category 1 */}
                <Container style={{marginTop: '5rem'}}>
                    <Featured />
                </Container>

                {/* Featured Category 2 */}
                <Container>
                    <Featured2 />
                </Container>
            </Container>

            {/* Featured Products */}
            <Container>
                <div className='roboto-condensed' style={{ marginBottom: '5rem', textAlign: 'left', marginTop: '8rem' }}>
                    <h2>FEATURED PRODUCTS</h2>
                    <hr style={{marignBottom: '2rem'}} />
                </div>
                <FeaturedProducts />
            </Container>

            {/* Join */}
            <Join />

            {/* Latest News */}
            <Container style={{ alignItems: 'center', marginTop: '8rem', marginBottom: '8rem'}}>
                <div className='roboto-condensed' style={{marginBottom: '5rem'}}>
                    <h3 style={{ textAlign: 'left' }}>LATEST NEWS</h3>
                    <hr />
                </div>

                <Latest />

                <Button variant='outline-dark' size='lg' type='button' onMouseOver={mouseOver} onMouseOut={mouseOut} className='m-auto align-self-center d-flex rubik'>
                    {hover ? <a href='ecommerce/bacel/#' style={{ textAlign: 'center', textDecoration: 'none', color: 'white' }}>LOAD MORE POSTS</a> 
                        :
                        <a href='ecommerce/bacel/#' style={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}>LOAD MORE POSTS</a>
                    }
                </Button>
            </Container>

            {/* Shop Now */}
            <Shop />

            {/* Latest Product */}
            <Container style={{ marginTop: '5rem' }}>
                <h2 className='roboto-condensed' style={{ textAlign: 'left' }}>Latest Arrivals</h2>
                <hr style={{ marginTop: '1rem' }} />
                <LatestP />
            </Container>

            {/* WarrantyBar */}
            <WarrantyBar />
        </div>
    );
}

export default Home;