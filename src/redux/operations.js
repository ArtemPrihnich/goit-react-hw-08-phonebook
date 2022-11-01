import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://635a5a206f97ae73a62a4092.mockapi.io/api/v1'

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
        const responce = await axios.post('/contacts', { name: contact.name, phone: contact.number })
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