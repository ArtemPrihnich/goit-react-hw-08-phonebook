import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshCurrentUser, registerUser } from '../auth/auth-operations'
import { toast } from 'react-toastify';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    toast(`Oops, something's wrong ${state.error}`, toastError)
};

const toastError = {
    position: "top-right",
    type: 'error',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}

const toastSuccess = {
    position: "top-right",
    type: 'success',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}

const initialState = {
    user: { name: null, email: null },
    token: null,
    error: null,
    isLogginIn: false,
    isLoading: false,
    isUserLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [registerUser.pending]: handlePending,
        [registerUser.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLogginIn = true
            state.isLoading = false
            toast('Success register.', toastSuccess)
        },
        [registerUser.rejected]: handleRejected,
        [logIn.pending]: handlePending,
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLogginIn = true
            state.isLoading = false
            toast('Success login.', toastSuccess)
        },
        [logIn.rejected]: handleRejected,
        [logOut.pending]: handlePending,
        [logOut.fulfilled](state, payload) {
            state.user = { name: null, email: null }
            state.token = null
            state.isLogginIn = false
            state.isLoading = false
        },
        [logOut.rejected]: handleRejected,
        [refreshCurrentUser.pending](state) {
            state.isLoading = true
            state.isUserLoading = true
        },
        [refreshCurrentUser.fulfilled](state, action) {
            state.user = action.payload
            state.isLogginIn = true
            state.isLoading = false
            state.isUserLoading = false
        },
        [refreshCurrentUser.rejected](state, action) {
            state.isLoading = false
            state.isUserLoading = false
            state.error = action.payload
        }
    }
})

export default authSlice.reducer