import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from './NavElements.styled'

export default function NavElements() {
    const navItems = [
        { href: '/', text: 'Home' },
        { href: '/contacts', text: 'Contacts' }
    ]

    return (
        <Box as='nav' ml='8'>
            {navItems.map(({ href, text }) => <Link to={href} key={href}>{text}</Link>)}
        </Box>
    )
}
