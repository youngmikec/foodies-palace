import React from 'react';
import './css/about.css';

const About = () => {
    return (
        <div className="about">
            <div className='my-container'>
                <div className="about-con">
                    <i className='ques'>Who are we?</i>
                    <h2>Foodies Palace</h2>
                    <p>
                        We are your friendly online neighborhood food delivery vendor. Here at Foodies palace we take our customers orders to heart 
                        because we believe that good food brings about good and quality health.
                    </p>
                    <p>
                        Foodies palace is home for all kinds of food and delicacies ranging from local to international food and recipes.
                        Our vast food menu with over 50+ different food got you covered.
                    </p>

                    <br/>
                    <br/>
                    <i className='ques'>Our mission</i>
                    <p>
                        Our mission at Foodies Palace is to ensure that food is readily available to everybody irrespective of class and status.
                        No matter what your buget is there is alwasy food for you at Foodies Palace.
                    </p>

                    <br/>
                    <br/>
                    <i className='ques'>Our Vision</i>
                    <p>
                        Our Vision at Foodies Palace is to become the best online food vendor of both local and international dishes nationally.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default About;