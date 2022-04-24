import React from 'react'
import SlickButton from '../../components/SlickButton'
import './css/about.css'

const About = () => {
    return (
        <div className='home-about'>
            <div className="my-container">
                <div className="about-image">
                    <div className="about-img"></div>
                </div>

                <div className="about-text">
                    <div className="about-text-inner">
                        <p>exclusive</p>
                        <h2>About Foodies Palace</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Non laboriosam earum ducimus ipsa veniam
                            quibusdam necessitatibus nihil. Impedit, vitae esse?
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Esse quis magnam consectetur,
                            eaque nisi error!
                        </p>
                        <SlickButton customClass="right-md" text="Read More" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About