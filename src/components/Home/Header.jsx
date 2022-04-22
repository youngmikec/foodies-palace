import React from 'react'
import SlickButton from '../../components/SlickButton'
import './css/header.css'

const Header = () => {
    const explore = () => {

    }

    return (
        <div className='home-header'>
            <div className='container'>
                <div className="header-text">
                    <div className="header-text-inner">
                        <p>Lorem, ipsum dolor.</p>
                        <h1>Eat Healthy and Natural Food</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus officia dolorum commodi distinctio obcaecati minima.</p>
                        <SlickButton customClass="center-md" onCustomClick={explore} nature="dark" text="Explore" />
                    </div>
                </div>

                <div className="header-image"></div>
            </div>
        </div>
    )
}

export default Header