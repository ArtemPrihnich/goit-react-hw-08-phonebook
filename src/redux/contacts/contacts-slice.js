import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, changeContact } from "redux/contacts/contacts-operations";
import { toast } from 'react-toastify'

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    toast(`Oops, something's wrong ${action.payload}`, toastError)
};

const toastError = {
    position: "top-right",
    type: 'error',
    autoClose: 2500,
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

const toastInfo = {
    position: "top-right",
    type: 'info',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}

const contactsSlice = createSlice({
    name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    firstLoading: false,
    error: null,
    operationDelete: null,
    operationChange: null
  },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.firstLoading = true
        },
        [fetchContacts.fulfilled](state, action) { 
            state.firstLoading = false
            state.error = null
            state.items = action.payload
        },
        [fetchContacts.rejected](state) {
            state.firstLoading = false
        },
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
            toast(`Contact ${action.payload.name} successfully added`, toastSuccess)
        },
        [addContact.rejected]:handleRejected,
        [deleteContact.pending](state, action) {
            state.operationDelete = `${action.meta.arg}`
        },
        [deleteContact.fulfilled](state, action) {
            state.operationDelete = null
            state.error = null
            state.items = state.items.filter(item => item.id !== action.payload.id)
            toast(`Contact ${action.payload.name} successfully removed`, toastInfo)
        },
        [deleteContact.rejected](state, action) {
            state.operationDelete = null;
            state.error = action.payload;
            toast(`Oops, something's wrong ${action.payload}`, toastError)
        },
        [changeContact.pending](state, action) {
            state.operationChange = `${action.meta.arg.id}`
        },
        [changeContact.fulfilled](state, action) {
            state.operationChange = null
            state.error = null
            state.items = state.items.map(item => item.id === action.payload.id ? { ...action.payload } : item)
            toast(`Contact ${action.payload.name} successfully changed`, toastInfo)
        },
        [changeContact.rejected](state, action) {
            state.operationChange = null;
            state.error = action.payload;
            toast(`Oops, something's wrong ${action.payload}`, toastError)
        },
  }
})

export default contactsSlice.reducer;