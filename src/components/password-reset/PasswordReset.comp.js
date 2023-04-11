import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const PasswordReset = ({ handleOnResetSubmit, handleOnChange, formSwitcher, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-dark text-center'>Reset Password</h1>
                    <hr />
                    <Form onSubmit={handleOnResetSubmit} autoComplete='off'>
                        <Form.Group>
                            <Form.Label>
                                Email Address
                            </Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleOnChange}
                                placeholder='Enter Email'

                            />
                        </Form.Group>

                        <Button type='submit'>Reset</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href='#!' className='text-dark' onClick={() => formSwitcher('login')}>Login Now!</a>
                </Col>
            </Row>

        </Container>
    )
};

export default PasswordReset

PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired

}

