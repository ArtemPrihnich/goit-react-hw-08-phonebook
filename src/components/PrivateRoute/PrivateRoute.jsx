import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getIsLogIn } from 'redux/auth/auth-selectors'

export default function PrivateRoute() {
    const isLogIn = useSelector(getIsLogIn)

    if (!isLogIn) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}
