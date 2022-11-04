import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

export const registerUser = createAsyncThunk('auth/registerUser', async userData => {
    try {
        const { data } = await axios.post('/users/signup', userData)
        token.set(data.token)
        return data
    } catch (error) {
        return console.log(error)
    }
})

export const logIn = createAsyncThunk('auth/logIn', async userData => {
    try {
        const { data } = await axios.post('/users/login', userData)
        token.set(data.token)
        return data
    } catch (error) {
        return console.log(error)
    }
})

export const logOut = createAsyncThunk('auth/logOut', async () => {
    try {
        await axios.post('/users/logout')
        token.unset()
    } catch (error) {
        return console.log(error)
    }
})

export const refreshCurrentUser = createAsyncThunk('auth/refreshCurrentUser', async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const prevToken = state.auth.token

    if (!prevToken) {
        return thunkAPI.rejectWithValue()
    }

    try {
        token.set(prevToken)
        const { data } = await axios.get('/users/current')
        return data
    } catch (error) {
        return console.log(error)
    }
})