import { Button, FormControl, Input, FormLabel, Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeContact } from 'redux/contacts/contacts-operations'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors'

export default function ChangeContactInfoForm({ data, onClose }) {
    const [name, setName] = useState(data.name)
    const [number, setNumber] = useState(data.number)
    const contacts = useSelector(getFilteredContacts)
    const dispatch = useDispatch()

    const nameInpuId = nanoid();
    const numberInputId = nanoid();

    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        if (name === 'name') {
            return setName(value)
        }
        if (name === 'number') {
            return setNumber(value)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.name === name && data.number === number) {
            toast('You need change name or number', {
                position: "top-right",
                type: 'info',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return
        }

        if (onDuplicatingName({ name })) {
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

        dispatch(changeContact({ id: data.id, name, number }))
        onClose()
    }

    const onDuplicatingName = ({ name }) => {
        const result = contacts.find(contact => {
            return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        })
        return result
    }

    return (
        <>
            <FormControl as='form' autoComplete='off' onSubmit={handleSubmit} pb={4} pr={6} pl={6}>
                <FormLabel htmlFor={nameInpuId}>Name</FormLabel>
                <Input id={nameInpuId} type="text" name='name' value={name} onChange={handleChange} />

                <FormLabel htmlFor={numberInputId} pt={4}>Number</FormLabel>
                <Input id={numberInputId} type="text" name='number' value={number} onChange={handleChange} />

                <Flex justify='flex-end' pt={3}>
                    <Button colorScheme='blue' type='submit' mr={4}>Save</Button>
                    <Button onClick={onClose}>Close</Button>
                </Flex>
            </FormControl>
        </>
    )
}
