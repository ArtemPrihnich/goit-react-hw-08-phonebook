import React from 'react'
import { getFilter } from 'redux/filter/filter-selectors';
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from 'redux/filter/filter-slice';
import { Flex, Heading, Input } from '@chakra-ui/react';

export default function ContactsFilter() {
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        if (name === 'filter') {
            dispatch(setFilter(value))
        }
    };
    return (
        <Flex justify='center' align='center' flexDirection='column' pt={4} pb={4}>
            <Heading as='h2' textAlign='center'>Write first latter of name to quick search</Heading>
            <Input w={500} mt='4' borderColor='gray.400' type="text" name='filter' value={filter} placeholder='Enter some name ...' onChange={handleChange} />
        </Flex >
    )
}