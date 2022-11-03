import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'redux/auth/auth-operations'
// import { logOut } from 'redux/auth/auth-operations'
import { getUserName } from 'redux/auth/auth-selectors'

export default function UserMenu() {
    const userName = useSelector(getUserName)
    const dispatch = useDispatch()

    // const handleLogOut = () => {
    //     dispatch(logOut())
    // }

    return (
        <div>
            <p>Welcome {userName}</p>
            <button type='button' onClick={() => dispatch(logOut())}>vihod</button>
        </div>
    )
}
