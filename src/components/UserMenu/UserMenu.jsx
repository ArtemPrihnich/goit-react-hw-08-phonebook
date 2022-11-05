import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'redux/auth/auth-operations'
import { getUserName } from 'redux/auth/auth-selectors'
// import { getItems } from 'redux/contacts/contacts-selectors'
// import { refreshContactsList } from '../../redux/contacts/contacts-slice'

export default function UserMenu() {
    const userName = useSelector(getUserName)
    // const items = useSelector(getItems)
    // console.log(items)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        // dispatch(refreshContactsList())
        dispatch(logOut())
        // dispatch(refreshContactsList())
    }

    return (
        <div>
            <p>Welcome {userName}</p>
            <button type='button' onClick={() => handleLogOut()}>LogOut</button>
        </div>
    )
}
