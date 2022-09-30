import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src= "https://i.ibb.co/Z1CrHx2/young-female-doctor-posing-corridor-hospital.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className='text-6xl font-thin  font-mono text-green-600 mb-4'>Progress Hospital</h1>
                    <h1 className="text-2xl font-semibold">Your New Smile Start Here</h1>
                    
                    <button className="btn mt-4 btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to primary"> <Link to="/appointment">Get Started</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;