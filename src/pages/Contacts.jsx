import React from 'react'
import ContactsForm from '../components/ContactsForm/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';
import ContactsFilter from '../components/ContactsFilter/ContactsFilter';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/contacts/contacts-selectors';

export default function Contacts() {
    const contacts = useSelector(getItems)

    return (
        <>
            <Box p={4}>
                <ContactsForm />
            </Box>
            <Box>
                {contacts.length > 0 && <ContactsFilter />}
                <ContactsList />
            </Box>
        </>
    )
}
