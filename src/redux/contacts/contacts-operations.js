import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const responce = await axios.get('/contacts')
    return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk('contacts/addContacts', async (contact, thunkAPI) => {
    try {
        const responce = await axios.post('/contacts', { name: contact.name, number: contact.number })
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${contactId}`)
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
