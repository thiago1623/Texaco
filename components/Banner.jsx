import Image from 'next/image'
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';

const Banner = () => {
  return (
    <Container className='bg-light' style={{'height': '6rem'}} fluid>
        <Row className='h-100'>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={4}>
                <p className='bold h4 text-dark'>Puntos Texaco</p>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="d-flex justify-content-center align-items-center">
                <Image className='mt-1' src='/images/texaco-logo.png' alt="Texaco logo image" width="50" height="50"/>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="d-flex justify-content-center align-items-center">
                
            </Col>
        </Row>
    </Container>
  )
}

export default Banner