import React from 'react'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { logIn } from 'redux/auth/auth-operations'
import { useDispatch } from 'react-redux'
import { FormControl, Input, FormLabel, Button, Box, Flex } from '@chakra-ui/react'

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
        <Box maxW={700} ml='auto' mr='auto' pt='10' pb='10'>
            <FormControl as='form' onSubmit={handleSubmit} style={{ border: '1px solid #A0AEC0', padding: '10px 20px', borderRadius: '10px' }}>
                <FormLabel htmlFor={emailInputId}>Email</FormLabel>
                <Input isRequired type='email' name='email' onChange={handleChange} id={emailInputId}></Input>
                <FormLabel htmlFor={passwordInputId}>Password</FormLabel>
                <Input isRequired type='password' name='password' onChange={handleChange} id={passwordInputId}></Input>
                <Flex justify='center'>
                    <Button w={200} colorScheme='blackAlpha' mt='6' type='submit'> Login </Button>
                </Flex>
            </FormControl>
        </Box>
    )
}
