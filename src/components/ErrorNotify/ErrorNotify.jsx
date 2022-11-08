import React from 'react'
import { useSelector } from "react-redux";
import { getError } from 'redux/contacts/contacts-selectors';

export default function ErrorNotify() {
    const error = useSelector(getError)

    return (
        <>
            <div style={{ display: 'block', width: '450px', margin: '0 auto', textAlign: 'center', paddingTop: '100px', fontSize: '28px' }}>
                Oops, something went wrong :( {error}
            </div>
        </>
    )
}
