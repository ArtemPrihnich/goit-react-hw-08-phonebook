import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'redux/auth/auth-operations'
import { getUserName } from 'redux/auth/auth-selectors'
// import { SlUser } from 'react-icons/sl'
// import { getItems } from 'redux/contacts/contacts-selectors'
// import { refreshContactsList } from '../../redux/contacts/contacts-slice'

export default function UserMenu() {
    const userName = useSelector(getUserName)
    // const items = useSelector(getItems)
    // console.log(items)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        // dispatch(refreshContactsList())
        dispatch(logOut())
        // dispatch(refreshContactsList())
    }

    return (
        <Flex align='center' mr={4}>
            {/* <SlUser /> */}
            {/* <p>Welcome <SlUser /> {userName}</p> */}
            <Text fontSize='xl' mr='2'>Welcome, <Avatar size='sm' /> {userName}</Text>
            <Button colorScheme='gray' type='button' onClick={() => handleLogOut()}>Logout</Button>
        </Flex>
    )
}
