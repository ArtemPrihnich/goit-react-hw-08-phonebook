import { Flex, Heading, Text, Highlight } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    const highlightStyle = {
        px: '2',
        py: '1',
        rounded: 'full',
        bg: 'gray.400',
        color: 'gray.100'
    }

    return (
        <Flex h='100vh' justify='center' align='center' flexDirection='column' pr={4} pl={4} bgColor='gray.100'>
            <Heading pb={6}>404 Page Not Found :(</Heading>
            <Text fontSize='2xl' textAlign='center'>
                Page Not Found, you can go to <Link to='/'><Highlight query='Home Page' styles={highlightStyle}>Home Page</Highlight></Link> or <Link to='/contacts'><Highlight query='Contacts Page' styles={highlightStyle}>Contacts Page</Highlight></Link> if you already have an account.
            </Text>
        </Flex>
    )
}
