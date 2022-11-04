import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserAuthMenu() {
    const authItems = [
        { href: '/register', text: 'Sign in' },
        { href: '/login', text: 'Log in' }
    ]

    return (
        <div>
            {authItems.map(({ href, text }) => <NavLink to={href} key={href}>{text}</NavLink>)}
        </div>
    )
}
