import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AppBar() {
    const navItems = [
        { href: '/', text: 'Home' },
        { href: '/contacts', text: 'Contacts' }
    ]

    const authItems = [
        { href: '/register', text: 'Sign in' },
        { href: '/login', text: 'Log in' }
    ]

    return (
        <header>
            <nav>
                {navItems.map(({ href, text }) => <NavLink to={href} key={href}>{text}</NavLink>)}
            </nav>
            <div>
                {authItems.map(({ href, text }) => <NavLink to={href} key={href}>{text}</NavLink>)}
            </div>
        </header>
    )
}
