import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'redux/auth/auth-operations'
import { getUserName } from 'redux/auth/auth-selectors'

export default function UserMenu() {
    const userName = useSelector(getUserName)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <Flex align='center' mr={4}>
            <Text fontSize='xl' mr='2'>Welcome, <Avatar size='sm' /> {userName}</Text>
            <Button colorScheme='gray' type='button' onClick={() => handleLogOut()}>Logout</Button>
        </Flex>
    )
}
