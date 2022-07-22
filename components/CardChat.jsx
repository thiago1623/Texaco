import Image from 'next/image'
import { useRouter } from 'next/router'
import {React, useState, useEffect, useRef} from 'react'
import {InputGroup, Form, ButtonGroup, Button, Row, Col, Card} from 'react-bootstrap';

import { HighlightOff, Send, AccountCircle } from '@mui/icons-material';
import {IconButton, SvgIcon} from '@mui/material';
import Loading from './Loading';

import axios from 'axios';

import {firstMessage, acceptTermsMessage, noAcceptTermsMessage, rememberToParticipate, 
        validateIFContainEspecialCharacters, validIfExistAString, correctNumber, succesFetch} from '../locales/globlalMessages'



const API = process.env.customKey


const CardChat = () => {
    const router = useRouter()
    const [userMessage, setUserMessage] = useState([]);
    const [showMessage, setShowMessage] = useState(null);
    const [fetching, setFetching] = useState(true);
    const [personAcceptTerms, setPersonAcceptTerms] = useState(false);
    const [numberOfAttemps, setNumberOfAttemps] = useState(0);
    const inputRef = useRef(null);

    const getData = () => {
        const virtualAssistendMessage =  firstMessage()
        setShowMessage(virtualAssistendMessage);
        setFetching(false)
    };


    const acceptTerms = () => {
        const virtualAssistendMessage =  acceptTermsMessage()
        setShowMessage(virtualAssistendMessage);
        setPersonAcceptTerms(true)
    };

    const handleKeyDown = (e) => {
        if (personAcceptTerms === true){
            if (e.key === 'Enter' && inputRef.current.value !== '') {
                sendMessage()
            }
        }
    }

    const noAcceptTerms = () => {
        if (numberOfAttemps >= 2) {
            router.push('/logout')
        }
        let count = 1
        setPersonAcceptTerms(false)
        const virtualAssistendMessage1 = noAcceptTermsMessage()
        setShowMessage((arr) => [...arr, virtualAssistendMessage1]);
        const virtualAssistendMessage2 = rememberToParticipate()
        setTimeout(() => {
            setShowMessage((arr) => [...arr, virtualAssistendMessage2]);
            setNumberOfAttemps(count + 1)
        }, 1000)
    }

    const clearInput = () => {
        inputRef.current.value = '';
    }

    const validateUserMessage = (userMessage) => {
        const virtualAssistendMessage = validateIFContainEspecialCharacters()
        // const virtualAssistendMessage2 = validIfExistAString()
        const virtualAssistendMessage3 = correctNumber()
        // const checkEspecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const checkNumberAndStringWithSpacing = /([^w+][^d+]\s)/g
        const checkIfUserMessageIsANumber = /^[_+][(][\d+].*$/g
        if (checkIfUserMessageIsANumber.test(userMessage)) {
            if (checkNumberAndStringWithSpacing.test(userMessage)) {
                setTimeout(() => {
                    setShowMessage(arr => [...arr, virtualAssistendMessage])
                }, 1000)
            } else {
                let numberAndExtension = userMessage.split(/[).*$]/g)
                let countryCode = numberAndExtension[0].replace(/[_+][(]/, '')
                let phone = numberAndExtension[1].replace(/\D/g, '')
                axios.post(`${API}/user/check`, {
                    'phoneNumber': `${phone}`,
                    'countryCode': `+${countryCode}`
                }).then(res => {
                    if (res.status == 200) {
                        // setTimeout(() => {
                        //     setShowMessage(arr => [...arr, virtualAssistendMessage3])
                        // }, 1000)
                        setTimeout(() => {
                            setShowMessage(arr => [...arr, succesFetch(res.data.message)])
                        }, 1000)
                    }
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }
        } else {
            setTimeout(() => {
                setShowMessage(arr => [...arr, virtualAssistendMessage])
            }, 1000)
        }
    }

    const sendMessage = () => {
        if (personAcceptTerms === true) {
            setShowMessage(arr => [...arr, ...userMessage])
            validateUserMessage(userMessage.map(item => item.message)[0])
        }
        inputRef.current.value = '';
    }
    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 2000)

    }, [])

    return (
            fetching ? 
                <Loading></Loading>
            : <Card className="text-center mt-5 mb-2" style={{'height': '38rem', 'border-radius': '30px 30px 0px 0px', 'min-width': '26rem', 'max-width': '30rem'}}>
                <Card.Header>Hoy</Card.Header>
                <Card.Body style={{'background': 'rgba(0,0,0,.03)'}}>
                    <Card.Text className='' style={{'max-height': '30rem', 'overflow-x': 'hidden', 'overflow-y': 'auto'}}>
                        {
                            showMessage.map((item, index) => {
                                return (
                                    <>
                                        <Row className='p-0' key={index}>
                                            <Col xs={3} className="d-flex justify-content-start  align-items-start ms-3 mt4">
                                                {
                                                    item.is_virtual_assistend ? <Image className='' src='/images/texaco-logo.png' alt="texaco image" width="50" height="50"/>
                                                    : <SvgIcon sx={{ fontSize: 50 }}><AccountCircle></AccountCircle></SvgIcon>
                                                }
                                            </Col>
                                            <Col xs={9} className="p-0 mt-2" style={{'margin-left': '-2rem'}}>
                                                <p className='d-flex justify-content-end align-items-center'>
                                                    {item.hour}
                                                </p>
                                                <Card className='mt-1' style={{'background': 'rgba(0,0,2,0.1)', 'border': 'none', 'border-radius': '0px 20px 20px 20px', 'min-height': '8vh', 'min-width': '14rem', 'overflow-x': 'auto'}}>
                                                    <Card.Text dangerouslySetInnerHTML={{ __html: item.message }} className='text-start ms-3 text-wrap p-2'>
                                                    </Card.Text>
                                                </Card>
                                                {
                                                    item.terms_and_conditions ? 
                                                        <div className='bg-light mt-2'>
                                                            <ButtonGroup>
                                                                <Button  className='m-1' style={{'width': '9rem', 'border-radius': '20px 20px 20px 20px', 'background': 'red'}} onClick={acceptTerms}>aceptar</Button>
                                                                <Button  className='m-1' style={{'width': '9rem', 'border-radius': '20px 20px 20px 20px', 'background': 'red'}} onClick={noAcceptTerms}>no acepto</Button>
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
                            <IconButton color={'inherit'} onClick={clearInput}><HighlightOff></HighlightOff></IconButton>
                        </Col>
                        <Col xs={10} md={10} className="">
                            <Form.Group >
                                <InputGroup.Text style={{'border-radius': '20px', 'width': '100%', 'background': '#fff'}}>
                                    <Form.Control ref={inputRef} className='chat-input' type="text" onKeyDown={handleKeyDown} onChange={(e) => setUserMessage([{'message': e.target.value, 'hour': '18:20', 'terms_and_conditions': false, 'is_virtual_assistend': false}])} style={{'border': 'none', 'width': '90%',}}/>
                                    <IconButton onClick={sendMessage} disabled={inputRef.current?.value === '' ? true : false}>
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