import React from 'react'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { logIn } from 'redux/auth/auth-operations'
import { useDispatch } from 'react-redux'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailInputId = nanoid()
    const passwordInputId = nanoid()

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        if (name === 'email') {
            return setEmail(value)
        }
        if (name === 'password') {
            return setPassword(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // const data = {
        //     email,
        //     password
        // }
        dispatch(logIn({ email, password }))
        setEmail('')
        setPassword('')
        // return console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={emailInputId}>Email</label>
                <input
                    type="text"
                    id={emailInputId}
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <label htmlFor={passwordInputId}>Password</label>
                <input
                    type="text"
                    id={passwordInputId}
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
