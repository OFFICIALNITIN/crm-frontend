import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const SearchForm = ({ handleOnChange, str }) => {
    console.log(str)
    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="3" >Search :{" "}</Form.Label>
                    <Col ms="9">
                        <Form.Control
                            name="searchStr"
                            onChange={handleOnChange}
                            value={str}
                            placeholder='Search....'
                        />

                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchForm