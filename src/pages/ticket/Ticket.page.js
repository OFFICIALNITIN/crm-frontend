import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PageBreadCrumb from '../../components/breadCrumb/BreadCrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import MessageHistory from '../../components/message-histroy/MessageHistory.comp'
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp'

const ticket = tickets[0]

const Ticket = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {


    }, [message])

    const handleOnSubmit = () => {
        alert('Form submitted!')
    }

    const handleOnChange = e => {
        setMessage(e.target.value)
    }
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadCrumb page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col className='text-weight-bolder text-secondary'>
                    <div className='Subject'>Subject:{ticket.subject}</div>
                    <div className='date'>Ticket Opened:{ticket.addedAt}</div>
                    <div className='status'>Status:{ticket.status}</div>
                </Col>
                <Col className='text-right'>
                    <Button variant='outline-dark'>Close Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4' >
                <Col>
                    <MessageHistory msg={ticket.history} />
                </Col>
            </Row>
            <hr />
            <Row className='mt-4' >
                <Col>
                    <UpdateTicket
                        msg={message}
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                    />
                </Col>
            </Row>

        </Container>
    )
}

export default Ticket