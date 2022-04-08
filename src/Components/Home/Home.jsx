import React from 'react';
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

    

    return(
        <div>
            <h1>Home</h1>
            <Banner />
            {/* Featured Categories */}

            {/* Featured Category 1 */}
            <Container>
                <div>
                    <h2 style={{ textAlign: 'left', marginTop: '8rem' }}>FEATURED CATEGORIES</h2>
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
                <div style={{ marginBottom: '5rem', textAlign: 'left', marginTop: '8rem' }}>
                    <h2>FEATURED PRODUCTS</h2>
                    <hr style={{marignBottom: '2rem'}} />
                </div>
                <FeaturedProducts />
            </Container>

            {/* Join */}
            <Join />

            {/* Latest News */}
            <Container style={{ alignItems: 'center', marginTop: '8rem', marginBottom: '8rem'}}>
                <div style={{marginBottom: '5rem'}}>
                    <h3 style={{ textAlign: 'left' }}>LATEST NEWS</h3>
                    <hr />
                </div>

                <Latest />

                <Button variant='outline-dark' size='lg' type='button' className='m-auto align-self-center d-flex'>
                    <a href='ecommerce/bacel/#' style={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}>LOAD MORE POSTS</a>
                </Button>
            </Container>

            {/* Shop Now */}
            <Shop />

            {/* Latest Product */}
            <Container style={{ marginTop: '5rem' }}>
                <h2 style={{ textAlign: 'left' }}>Latest Arrivals</h2>
                <hr style={{ marginTop: '1rem' }} />
                <LatestP />
            </Container>

            {/* WarrantyBar */}
            <WarrantyBar />
        </div>
    );
}

export default Home;