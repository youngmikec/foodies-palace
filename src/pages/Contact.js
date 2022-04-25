import React from 'react';
import '../App.css';
import './Contact.css';


import SlickButton from '../components/SlickButton';

const Contact = () => {
    return (
        <div className="contact"><br></br><br></br><br></br>
             <div className='header1'><h1> Contact page</h1></div>
            <br></br>
            <h2>Contact Us</h2>
            <p>
               <h2>
                Foodies-Palace Limited
                </h2>
                KM 10 Lagos Ibadan Express way<br></br>
                Ogun State. Nigeria.<br></br>
                Phone:  +234013, +2349949<br></br>
                Email:  foodiespalace.com.ng
            </p>
              
            <div className='card'>
              <form> 
                 <div className="form-group">
                     <label htmlFor="name">Full Name</label><br></br>
                     <input type="text" className="form-control" />
                   </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label><br></br>
                      <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                  <div className="form-group">
                       <label htmlFor="message">Message</label><br></br>
                       <textarea className="form-control" rows="5"></textarea><br></br>
                    </div>
                  <SlickButton customClass="center-md" nature="dark" text="Submit" />
                </form>
            </div>
        </div>
    
    );
};

export default Contact;