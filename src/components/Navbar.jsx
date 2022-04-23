import React from 'react'
import NavItem from '../components/NavItem'
import NavLogo from '../components/NavLogo'
import './css/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-con'>
            <div className="navbar">
                <div className="navbar-logo">
                    <NavLogo logo="../img/logo.png" alt="logo" />
                </div>

                <div className="navbar-items">
                    <NavItem link="/" linkText="Home" />
                    <NavItem link="/about" linkText="About" />
                    <NavItem link="/products" linkText="Products" />
                    <NavItem link="/contact" linkText="Contact" />
                </div>
            </div>
        </div>
    )
}

export default Navbar