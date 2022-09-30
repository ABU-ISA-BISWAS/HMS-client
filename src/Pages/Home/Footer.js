import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className=" p-10 ">
          
            <div className='footer'>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Dental Care</a>
                <a className="link link-hover">Emergencies</a>
                <a className="link link-hover">Emergencies</a>
                <a className="link link-hover">Heart Care</a>
            </div>
            <div>
                <span className="footer-title">Hospital</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            </div>
            <footer className="footer footer-center p-4  text-base-content">
                <div className='my-10 text-center'>
                    <p>Copyright © 2022 - All right reserved (Musa-Isa) .</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;