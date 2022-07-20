import Image from 'next/image'
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import CardChat from './CardChat'; 

const ChatBot = () => {
    return (
        <Container className='m-0 p-0' fluid >
            <Row className='bg-dark d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-end align-items-center p-0' xs={12} sm={12} md={12} lg={9}>
                    <CardChat></CardChat>
                </Col>
            </Row>
        </Container>
    )
}

export default ChatBot