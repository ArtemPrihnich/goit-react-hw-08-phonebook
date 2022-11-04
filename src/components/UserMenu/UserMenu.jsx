import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'redux/auth/auth-operations'
import { getUserName } from 'redux/auth/auth-selectors'

export default function UserMenu() {
    const userName = useSelector(getUserName)
    const dispatch = useDispatch()

    return (
        <div>
            <p>Welcome {userName}</p>
            <button type='button' onClick={() => dispatch(logOut())}>LogOut</button>
        </div>
    )
}
