import React from 'react'
import { Link } from 'react-router-dom'
import './css/navItem.css'

const NavItem = ({ link, linkText }) => {
    return (
        <Link className='navbar-link' to={link}>
            <div className='navbar-item'>{linkText}</div>
        </Link>
    )
}

export default NavItem