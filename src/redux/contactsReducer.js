import { combineReducers } from "@reduxjs/toolkit";
import { contactsReduceri } from './contacts/contacts-slice';
import filter from './filter/filter-slice';

const contactsReducer = combineReducers({
    contacts: contactsReduceri,
    filter
})

export default contactsReducer;