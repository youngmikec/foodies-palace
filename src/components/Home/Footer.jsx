import React from 'react'
import { Link } from 'react-router-dom'
import './css/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-image"><img style={{ width: "100%", height: "100%" }} src="../../img/logo.png" alt="" /></div>

                <div className="footer-content">
                    <div className="support content-con">
                        <h3>Support</h3>
                        <Link to={"#"}><p>Help</p></Link>
                        <Link to={"#"}><p>Advisories</p></Link>
                        <Link to={"#"}><p>Contact</p></Link>
                        <Link to={"#"}><p>Status</p></Link>
                    </div>

                    <div className="company content-con">
                        <h3>Company</h3>
                        <Link to={"#"}><p>About</p></Link>
                        <Link to={"#"}><p>Blog</p></Link>
                        <Link to={"#"}><p>Press</p></Link>
                        <Link to={"#"}><p>Team</p></Link>
                    </div>

                    <div className="policies content-con">
                        <h3>Terms and Policies</h3>
                        <Link to={"#"}><p>Policies</p></Link>
                        <Link to={"#"}><p>Terms of Use</p></Link>
                        <Link to={"#"}><p>Code of Conduct</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer