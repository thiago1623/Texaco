import Image from 'next/image'
import {React, useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import {InputGroup, Form, ButtonGroup, Button} from 'react-bootstrap';
import { Row, Col }  from 'react-bootstrap';

import { HighlightOff, Send } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';


const CardChat = () => {
    const [userMessage, setUserMessage] = useState(null);
    const [showMessage, setShowMessage] = useState([]);
    const [firstMessage, setFirstMessage] = useState([]);

    const getData = () => {
        const data = [
            {
                'message': 'Hola Bienbenid@ al asistente virtual de la promoción 11 salvadoreños a catar',
                'hour': `${18}:${0}${0}`,
                'terms_and_conditions': false
            },
            {
                'message': '<a href="#">Para</a> participar debes estar inscrit@ en el programa puntos texaco, ser mayor de edad y aceptar los terminos y condiciones de la promoción',
                'hour': `${18}:${0}${3}`,
                'terms_and_conditions': true
            },
        ]
        setFirstMessage(data);
    };

    const sendMessage = () => {
        setShowMessage(arr => [...arr, userMessage])
    }
    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 2000)
    }, [])

    return (
            <Card className="text-center mt-5 mb-2" style={{'height': '38rem', 'border-radius': '30px 30px 0px 0px', 'min-width': '26rem', 'max-width': '30rem'}}>
                <Card.Header>Hoy</Card.Header>
                <Card.Body style={{'background': 'rgba(0,0,0,.03)'}}>
                    <Card.Text>
                        {
                            firstMessage.map(item => {
                                return (
                                    <>
                                        <Row className='p-0'>
                                            <Col xs={3} className="d-flex justify-content-start  align-items-center ms-3">
                                                <Image className='' src='/images/texaco-logo.png' alt="this is my " width="50" height="50"/>
                                            </Col>
                                            <Col xs={9} className="p-0 mt-2" style={{'margin-left': '-2rem'}}>
                                                <p className='d-flex justify-content-end align-items-center'>
                                                    {item.hour}
                                                </p>
                                                <Card className='mt-1' style={{'background': 'rgba(0,0,2,0.1)', 'border': 'none', 'border-radius': '0px 20px 20px 20px', 'min-height': '8vh', 'min-width': '14rem'}}>
                                                    <Card.Text dangerouslySetInnerHTML={{ __html: item.message }} className='text-start ms-3 text-wrap p-2'>
                                                    </Card.Text>
                                                </Card>
                                                {
                                                    item.terms_and_conditions ? 
                                                        <div className='bg-light mt-2'>
                                                            <ButtonGroup>
                                                                <Button variant="outline-danger" className='m-1' style={{'width': '10rem'}}>aceptar</Button>
                                                                <Button variant="outline-danger" className='m-1' style={{'width': '10rem'}}>no acepto</Button>
                                                            </ButtonGroup>
                                                        </div> :
                                                    <div></div>
                                                }
                                            </Col>
                                        </Row>
                                    </>
                                )
                            })
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{'background': '#fff'}}>
                    <Row >
                        <Col xs={2} md={2} className="d-flex justify-content-end">
                            <IconButton color={'inherit'}><HighlightOff></HighlightOff></IconButton>
                        </Col>
                        <Col xs={10} md={10} className="">
                        <Form.Group >
                            <InputGroup.Text style={{'border-radius': '20px', 'width': '100%', 'background': '#fff'}}>
                                <Form.Control className='chat-input' type="text" onChange={(e) => setUserMessage(e.target.value)} style={{'border': 'none', 'width': '90%',}}/>
                                <IconButton onClick={sendMessage}>
                                    <Send></Send>
                                </IconButton>
                            </InputGroup.Text>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
  )
}

export default CardChat