import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from "../Assets/Images/unnamed.jpg";

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
const HeroBanner = () => {
    return (
        <>
            <Container className='herro' >
                <Row className='herro-bann'>
        
                    <Col xl={6} md={6} lg={6} sm={6} className='mt-5 hero1 heroall'>

                        <h3 className='hero-title1'>Fitness Club</h3>
                        <h2 className='hero-title mt-5'>Sweat , Smile And Repeat </h2>
                        <h2 className='hero-title mt-3'>Check Out The Most Effective Excersices </h2>
                        <button className='hero-butt mt-3 mb-3'>Explore Excercises </button>
                    </Col>

                    <Col xl={6} md={6} lg={6} sm={6} className='mt-5 ms-auto heroall mb-5'>
                        <MDBCarousel >
                            <MDBCarouselItem 
                                className='w-100 d-block img-hero mb-5'
                                itemId={1}
                                src={img1}
                                alt='...'
                            />

                        </MDBCarousel>
                    </Col>

                    
                </Row>
            </Container>



        </>
    )
}

export default HeroBanner