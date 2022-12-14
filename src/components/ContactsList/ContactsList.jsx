import ErrorNotify from 'components/ErrorNotify/ErrorNotify';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getChangeOperationResult, getDeleteOperationResult, getError, getFilteredContacts, getFirstLoadingState } from 'redux/contacts/contacts-selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/contacts-operations';
import { Box, SimpleGrid, Avatar, Flex, Progress, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, useDisclosure } from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import ChangeContactInfoForm from 'components/ChangeContactInfoForm/ChangeContactInfoForm';

export default function ContactsList() {
    const contacts = useSelector(getFilteredContacts)
    const firstLoading = useSelector(getFirstLoadingState)
    const error = useSelector(getError)
    const deleteOperation = useSelector(getDeleteOperationResult)
    const changeOperation = useSelector(getChangeOperationResult)
    const dispatch = useDispatch()

    const { onOpen, isOpen, onClose } = useDisclosure()
    const [contactData, setContactData] = useState(null)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const removeContact = (id) => {
        const action = deleteContact(id);
        dispatch(action);
    }

    const handleChangeBtnClick = (contact) => {
        setContactData({ ...contact })
        return onOpen()
    }

    const handleCloseForm = () => {
        onClose()
    }

    return (
        <>
            {firstLoading && <Progress w={700} ml='auto' mr='auto' size='xs' isIndeterminate />}
            {!firstLoading && error && <ErrorNotify />}
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
                                <IconButton
                                    aria-label='Change button'
                                    isLoading={changeOperation === id}
                                    icon={<EditIcon w={5} h={5} />}
                                    onClick={() => handleChangeBtnClick({ name, number, id })}>

                                </IconButton>
                                <IconButton
                                    aria-label='Delete button'
                                    isLoading={deleteOperation === id}
                                    icon={<DeleteIcon w={5} h={5} />}
                                    onClick={() => removeContact(id)}>

                                </IconButton>
                            </Flex>
                        </Flex>

                    )
                })}
            </SimpleGrid>
            <Modal isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change Contact</ModalHeader>
                    <ChangeContactInfoForm data={contactData} onClose={handleCloseForm} />
                </ModalContent>
            </Modal>
        </>
    )
}
