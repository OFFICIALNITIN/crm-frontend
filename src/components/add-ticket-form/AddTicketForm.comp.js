import React from 'react'
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap'
import Dropzone from 'react-dropzone-uploader'

import './add-ticket-form.style.css'

const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt, frmDataError }) => {
    const handleFileUpload = (file) => {
        console.log(file)
    }
    return (
        < Jumbotron className="mt-3 add-new-ticket bg-light" >
            <h1 className='text-dark text-center'>Add New Ticket</h1>
            <hr />
            <Form className='Frm' onSubmit={handleOnSubmit} autoComplete='off'>
                <Form.Group as={Row} >
                    <Form.Label column sm={3}>
                        Subject
                    </Form.Label >
                    <Col sm={9} >
                        <Form.Control
                            //minLength="5"
                            maxLength="100"
                            name='subject'
                            value={frmDt.subject}
                            onChange={handleOnChange}
                            placeholder='Subject'
                            required
                        />
                        <Form.Text className='text-danger' >{frmDataError.subject && "Subject is required!"}</Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={3} >
                        Issue Found
                    </Form.Label>
                    <Col sm={9} >
                        <Form.Control
                            type='date'
                            value={frmDt.issueDate}
                            name='issueDate'
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Details
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        name='detail'
                        value={frmDt.detail}
                        rows='5'
                        onChange={handleOnChange}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Upload file
                    </Form.Label>
                    <Dropzone
                        onChangeStatus={handleFileUpload}
                        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        maxFiles={1}
                        inputContent={(files, extra) => (extra.reject ? 'Only Doc files allowed' : 'Drop or Click to upload Doc file')}
                        styles={{
                            dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
                            inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
                        }}
                    />
                </Form.Group>




                <Button type='submit' variant='dark' block >Login</Button>
            </Form>
        </Jumbotron >
    )
}


export default AddTicketForm

