import React from 'react'
// import { Item } from './ErrorNotify.styled'
import { useSelector } from "react-redux";
import { getError } from 'redux/contacts/contacts-selectors';

export default function ErrorNotify() {
    const error = useSelector(getError)

    return (
        <>
            <li>Oops, something went wrong :( {error}</li>
        </>
    )
}
