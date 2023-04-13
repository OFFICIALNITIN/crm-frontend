import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageBreadCrumb from '../../components/breadCrumb/BreadCrumb.comp'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp'
import { useEffect } from 'react'
import { shortText } from '../../utils/Validation'

const initialFrmDt = {
    subject: '',
    issueDate: '',
    detail: ''
};

const initialFrmError = {
    subject: false,
    issueDate: false,
    detail: false,
}

const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);
    useEffect(() => { }, [frmData, frmDataError]);

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFrmData({
            ...frmData,
            [name]: value,
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        setFrmDataError(initialFrmError);

        const isSubjectValid = await shortText(frmData.subject)

        setFrmDataError({
            ...initialFrmError,
            subject: !isSubjectValid,
        })

        console.log('Form submit request received')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadCrumb page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <AddTicketForm
                        handleOnSubmit={handleOnSubmit}
                        handleOnChange={handleOnChange}
                        frmDt={frmData}
                        frmDataError={frmDataError}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AddTicket