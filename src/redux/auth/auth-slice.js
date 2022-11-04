import { createSlice } from "@reduxjs/toolkit";
import {logIn, logOut, refreshCurrentUser, registerUser} from '../auth/auth-operations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLogginIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [registerUser.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLogginIn = true
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLogginIn = true
        },
        [logOut.fulfilled](state, payload) {
            state.user = { name: null, email: null }
            state.token = null
            state.isLogginIn = false
        },
        [refreshCurrentUser.fulfilled](state, action) {
            state.user = action.payload
            state.isLogginIn = true
        }
    }
})

export default authSlice.reducer