import { Button, FormControl, Input, FormLabel, Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeContact } from 'redux/contacts/contacts-operations'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify';

export default function ChangeContactInfoForm({ data, onClose }) {
    const [name, setName] = useState(data.name)
    const [number, setNumber] = useState(data.number)
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
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return
        }
        dispatch(changeContact({ id: data.id, name, number }))
        onClose()
    }

    return (
        <>
            <FormControl as='form' onSubmit={handleSubmit} pb={4} pr={6} pl={6}>
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
