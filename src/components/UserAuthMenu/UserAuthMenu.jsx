import { Box } from '@chakra-ui/react'
import React from 'react'
import { NavigationLink } from './UserAuthMenu.styled'

export default function UserAuthMenu() {
    const authItems = [
        { href: '/register', text: 'Signup' },
        { href: '/login', text: 'Login' }
    ]

    return (
        <Box mr='4' p={1} border='1px solid gray' borderRadius='3px'>
            {authItems.map(({ href, text }) => <NavigationLink to={href} key={href}>{text}</NavigationLink>)}
        </Box>
    )
}
