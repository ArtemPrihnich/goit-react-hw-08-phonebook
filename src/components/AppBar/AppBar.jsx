import UserAuthMenu from 'components/UserAuthMenu/UserAuthMenu'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getIsLogIn } from 'redux/auth/auth-selectors'

export default function AppBar() {
    const navItems = [
        { href: '/', text: 'Home' },
        { href: '/contacts', text: 'Contacts' }
    ]

    const isLogginIn = useSelector(getIsLogIn)

    return (
        <header>
            <nav>
                {navItems.map(({ href, text }) => <NavLink to={href} key={href}>{text}</NavLink>)}
            </nav>
            {isLogginIn ? <UserMenu /> : <UserAuthMenu />}
        </header>
    )
}
