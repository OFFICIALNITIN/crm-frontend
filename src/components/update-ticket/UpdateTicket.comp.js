import React from 'react'
import { Button, Form } from 'react-bootstrap'

const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
    return (
        <Form onSubmit={handleOnSubmit} >
            <Form.Label>
                Reply
            </Form.Label>
            <Form.Text>
                Please reply your message here or update the ticket
            </Form.Text>
            <Form.Control
                onChange={handleOnChange}
                name='detail'
                value={msg}
                as="textarea"
                rows="5"
            />
            <div className='text-right mt-3 mb-3'>
                <Button variant='info' type='submit'>Reply</Button>
            </div>

        </Form>
    )
}

export default UpdateTicket