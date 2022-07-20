import Image from 'next/image'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Row className='bg-light' style={{'height': '16vh'}}>
        <Col sm={12} xs={12} lg={12} className="d-flex justify-content-center">
            <Image className='' src='/images/texacoFooter.png' alt="this is my " width="200" height="80"/>
        </Col>
    </Row>
  )
}

export default Footer