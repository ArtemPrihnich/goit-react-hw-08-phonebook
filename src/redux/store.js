import { configureStore } from '@reduxjs/toolkit'
// import contactsReducer from './contactsReducer';
import filterSlice from './filter/filter-slice';
import authSlice from './auth/auth-slice'
import contactsSlice from './contacts/contacts-slice';

export const store = configureStore({
    reducer: {
        // items: contactsReducer,
        auth: authSlice,
        contacts: contactsSlice,
        filter: filterSlice

    }
});
