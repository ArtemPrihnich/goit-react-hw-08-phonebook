import React from 'react'
import ContactsForm from '../components/ContactsForm/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';
import ContactsFilter from '../components/ContactsFilter/ContactsFilter';

export default function Contacts() {
    return (
        <>
            <ContactsForm />
            <ContactsFilter />
            <ContactsList />
        </>
    )
}
