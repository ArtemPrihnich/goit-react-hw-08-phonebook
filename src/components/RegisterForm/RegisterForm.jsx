import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { registerUser } from 'redux/auth/auth-operations'

export default function RegisterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nameInputId = nanoid()
    const emailInputId = nanoid()
    const passwordInputId = nanoid()

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        if (name === 'name') {
            return setName(value)
        }
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
        //     name,
        //     email,
        //     password
        // }
        dispatch(registerUser({ name, email, password }))
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={nameInputId}>Name</label>
                <input
                    type="text"
                    id={nameInputId}
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
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
