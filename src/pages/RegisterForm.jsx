import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { registerUser } from 'redux/auth/auth-operations'
import { FormControl, Input, FormLabel, Button, Box, Flex } from '@chakra-ui/react'

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
        <Box maxW={700} ml='auto' mr='auto' pt='10' pb='10'>
            <FormControl as='form' onSubmit={handleSubmit} style={{ border: '1px solid #A0AEC0', padding: '10px 20px', borderRadius: '10px' }}>
                <FormLabel htmlFor={nameInputId}>Name</FormLabel>
                <Input isRequired type='text' name='name' onChange={handleChange} id={nameInputId}></Input>
                <FormLabel htmlFor={emailInputId}>Email</FormLabel>
                <Input isRequired type='email' name='email' onChange={handleChange} id={emailInputId}></Input>
                <FormLabel htmlFor={passwordInputId}>Password</FormLabel>
                <Input isRequired type='password' name='password' onChange={handleChange} id={passwordInputId}></Input>
                <Flex justify='center'>
                    <Button w={200} colorScheme='blackAlpha' mt='6' type='submit'> Register </Button>
                </Flex>
            </FormControl>
        </Box>
    )
}

