import React from 'react'
import './css/navLogo.css'

const NavLogo = ({ logo, alt }) => {
    return (
        <div className='nav-logo'>
            <img src={logo} alt={alt} />
        </div>
    )
}

export default NavLogo