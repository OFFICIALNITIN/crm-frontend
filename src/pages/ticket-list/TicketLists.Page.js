import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PageBreadCrumb from '../../components/breadCrumb/BreadCrumb.comp'
import SearchForm from '../../components/search-form/SearchForm.comp'
import TicketTable from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'

const TicketLists = () => {

    const [str, setStr] = useState('')
    const [dispTicket, setDispTicket] = useState(tickets)

    useEffect(() => {

    }, [str, dispTicket])

    const handleOnChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setStr(value);
        searchTicket(value);
    };

    const searchTicket = (sttr) => {
        const displayTickts = tickets.filter((row) => row.subject.toLowerCase().includes(sttr.toLowerCase())
        );

        console.log(dispTicket)
        setDispTicket(displayTickts)
    };
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadCrumb page="Ticket Lists" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant='dark'>Add New Ticket</Button>
                </Col>
                <Col className='text-right' >
                    <SearchForm handleOnChange={handleOnChange} str={str} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable tickets={dispTicket} />
                </Col>
            </Row>
        </Container>
    )
}

export default TicketLists