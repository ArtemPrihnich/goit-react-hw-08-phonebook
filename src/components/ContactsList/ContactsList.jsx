import ErrorNotify from 'components/ErrorNotify/ErrorNotify';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getError, getFilteredContacts, getIsLoading } from 'redux/contacts/contacts-selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/contacts-operations';
import { Box, SimpleGrid, Avatar, Flex, Progress, IconButton } from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons';

export default function ContactsList() {
    const contacts = useSelector(getFilteredContacts)
    const loading = useSelector(getIsLoading)
    const error = useSelector(getError)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const removeContact = (id) => {
        const action = deleteContact(id);
        dispatch(action);
    }

    return (
        <>
            {loading && <Progress w={700} ml='auto' mr='auto' size='xs' isIndeterminate />}
            {!loading && error && <ErrorNotify />}
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={6} pt={6} pb={6}>
                {!error && contacts?.map(({ name, number, id }) => {
                    return (
                        <Flex justify='space-between' border='1px solid gray' borderRadius='4px' pt='2' pb='2' pl='4' pr='4' fontSize='xl' key={id}>
                            <Box>
                                <Flex align='center'>
                                    <Avatar size='xs' mr='2' />
                                    {name}
                                </Flex>
                                <Flex align='center' mt={1}>
                                    <PhoneIcon w={6} h={6} color='gray.600' mr='2' />
                                    {number}
                                </Flex>
                            </Box>
                            <Flex alignItems='center'>
                                <IconButton aria-label='Delete button' icon={<DeleteIcon w={5} h={5} />} onClick={() => removeContact(id)}></IconButton>
                            </Flex>
                        </Flex>
                    )
                })}
            </SimpleGrid>
        </>
    )
}
