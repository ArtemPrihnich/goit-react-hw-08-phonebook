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

export const registerUser = createAsyncThunk('auth/registerUser', async (userData, {rejectWithValue}) => {
    try {
        const { data } = await axios.post('/users/signup', userData)
        token.set(data.token)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const logIn = createAsyncThunk('auth/logIn', async (userData, {rejectWithValue}) => {
    try {
        const { data } = await axios.post('/users/login', userData)
        token.set(data.token)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const logOut = createAsyncThunk('auth/logOut', async (_, {rejectWithValue}) => {
    try {
        await axios.post('/users/logout')
        token.unset()
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const refreshCurrentUser = createAsyncThunk('auth/refreshCurrentUser', async (_, {getState, rejectWithValue}) => {
    const state = getState()
    const prevToken = state.auth.token

    if (!prevToken) {
        return rejectWithValue()
    }

    try {
        token.set(prevToken)
        const { data } = await axios.get('/users/current')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})