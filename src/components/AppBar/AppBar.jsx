import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import NavElements from 'components/NavElements/NavElements'
import UserAuthMenu from 'components/UserAuthMenu/UserAuthMenu'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'
import { useSelector } from 'react-redux'
import { getIsLogIn } from 'redux/auth/auth-selectors'

export default function AppBar() {
    const isLogginIn = useSelector(getIsLogIn)

    return (
        <Flex as='header' h='14' pr={4} pl={4} align='center' borderBottom='1px solid black' bg='gray.300'>
            <Box border='1px solid gray' borderRadius='3px' ml='4'>
                <Link to='/' style={{ display: 'flex', padding: '4px', justifyContent: 'center', alignItems: 'center' }}>
                    <PhoneIcon w={6} h={6} mr='2' />
                    <Text lineHeight='1' align='center' fontWeight='bold'>Contacts <br /> Book</Text></Link>
            </Box>
            <NavElements />
            <Box ml='auto'>
                {isLogginIn ? <UserMenu /> : <UserAuthMenu />}
            </Box>
        </Flex>
    )
}
