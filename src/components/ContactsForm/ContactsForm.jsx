import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operations';
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import { toast } from 'react-toastify'

export default function ContactsForm() {
    const contacts = useSelector(getFilteredContacts)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        if (name === 'name') {
            return setName(value)
        }
        if (name === 'number') {
            return setNumber(value)
        }
    };

    const contactNameInpuId = nanoid();
    const contactNumberInputId = nanoid();

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddContact({ name, number })
    }

    const onAddContact = (contact) => {
        if (onDuplicatingName(contact)) {
            return toast('This contact is already on your list.', {
                position: "top-right",
                type: 'warning',
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }

        dispatch(addContact(contact))
        setName('')
        setNumber('')

    }

    const onDuplicatingName = ({ name }) => {
        const result = contacts.find(contact => {
            return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        })
        return result
    }

    return (
        <FormControl as='form' isRequired autoComplete='off' style={{ border: '1px solid #A0AEC0', padding: '10px 20px', borderRadius: '10px' }} onSubmit={handleSubmit}>
            <FormLabel htmlFor={contactNameInpuId}>Name</FormLabel>
            <Input type='text' name='name' value={name} id={contactNameInpuId} onChange={handleChange} borderColor='gray.400' placeholder='Ivan Ivanov' />
            <FormLabel htmlFor={contactNumberInputId}>Number</FormLabel>
            <Input type='number' name='number' value={number} id={contactNumberInputId} onChange={handleChange} borderColor='gray.400' placeholder='+38 (012) 345 67 89' />
            <Button colorScheme='blackAlpha' ml='6' mt='4' type='submit'>Add Contact</Button>
        </FormControl>
    )
}

