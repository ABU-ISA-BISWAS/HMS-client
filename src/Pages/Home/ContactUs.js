import React from 'react';
import background from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className="text-center py-5">
            <div className=''>
                <h4 className='text-primary text-xl font-bold'>Contact Us</h4>
                <h1 className='text-white text-2xl'>Stay Connected With Us</h1>


                <form>
                    <input className='my-3 rounded py-1 px-8' type="email" placeholder='Your Email' />
                    <br />
                    <input className='my-3 rounded py-1 px-8' type="text" placeholder='Subject' />
                    <br />
                    <textarea className='my-3 rounded py-1 px-8' name="" id="" cols="22" rows="3" placeholder='Your Message'></textarea>
                </form>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to primary">Submit</button>

            </div>

        </section>
    );
};

export default ContactUs;