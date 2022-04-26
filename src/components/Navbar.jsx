import React, { useState, useEffect } from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import NavItem from '../components/NavItem'
import NavLogo from '../components/NavLogo'
import './css/navbar.css'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    const toggleNav = () => {
        setShow(!show)
    }
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 60) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={`navbar-con ${scrolled ? 'scrolled-nav':''}`}>
            <div className={`navbar mobile-nav ${scrolled ? 'scrolled-nav':''}`}>
                <div className="navbar-logo">
                    <NavLogo logo="../img/logo.png" alt="logo" />
                </div>

                <div className="navbar-items" style={{height: show ? "200px" : "0"}}>
                    <NavItem link="/" linkText="Home" />
                    <NavItem link="/about" linkText="About" />
                    <NavItem link="/products" linkText="Products" />
                    <NavItem link="/contact" linkText="Contact" />
                </div>

                <div className='navbar-toggle' onClick={() => { toggleNav() }}>
                    <FaArrowCircleDown  style={{ transform: show ? "rotate(180deg)" : "none", transition: "all .5s ease" }}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar