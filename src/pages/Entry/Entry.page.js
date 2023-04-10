import React, { useState } from 'react'
import '../Entry/entry.style.css'
import { Jumbotron } from 'react-bootstrap'
import LoginForm from '../../components/login/Login.comp'
import PasswordReset from '../../components/password-reset/PasswordReset.comp'

const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [FrmLoad, setFrmLoad] = useState('login')

    const handleOnChange = e => {
        const { name, value } = e.target

        switch (name) {
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break

            default:
                break
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        if (!email || !password) {
            alert("Fill up all the form!")
        }

        console.log(email, password)
    }

    const handleOnResetSubmit = e => {
        e.preventDefault();

        if (!email) {
            return alert("Please enter the email!")
        }

        console.log(email)
    }

    const formSwitcher = frmType => {
        setFrmLoad(frmType)
    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className='form-box'>
                {FrmLoad === 'login' && <LoginForm handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                    pass={password} />}

                {FrmLoad === 'reset' && <PasswordReset handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                />}

            </Jumbotron>
        </div>
    )
}

export default Entry