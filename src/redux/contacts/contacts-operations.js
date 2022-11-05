import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// axios.defaults.baseURL = 'https://635a5a206f97ae73a62a4092.mockapi.io/api/v1'
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        // const state = thunkAPI.getState()
        // const userToken = state.auth.token

        const responce = await axios.get('/contacts')
        console.log(responce)
    return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk('contacts/addContacts', async (contact, thunkAPI) => {
    console.log(contact)
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