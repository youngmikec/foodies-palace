import React from 'react';
import '../App.css';
import './css/Contact.css';


import SlickButton from '../components/SlickButton';

const Contact = () => {
    return (
        <div className="container"><br></br><br></br><br></br>
          <div className='text-center'>
            <h2>Foodies-Palace Limited</h2>
            <p>
              KM 10 Lagos Ibadan Express way<br></br>
              Ogun State. Nigeria.<br></br>
              Phone:  +234013, +2349949<br></br>
              Email:  foodiespalace.com.ng
            </p>
          </div>
              
          <div className='card'>
            <h3 className='text-center'>Contact Form</h3>
            <form> 
                <div className="form-group">
                    <label className='control-label' htmlFor="name">Full Name</label><br></br>
                    <input type="text" className="form-control" />
                  </div>
                <div className="form-group">
                    <label className='control-label' htmlFor="exampleInputEmail1">Email address</label><br></br>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                  </div>
                <div className="form-group">
                  <label className='control-label' htmlFor="message">Message</label><br></br>
                  <textarea className="form-control" rows="5"></textarea><br></br>
                </div>
                <br/>
                <br/>
                <SlickButton customClass="center-md" nature="dark" text="Submit" />
              </form>
          </div>
        </div>
    
    );
};

export default Contact;