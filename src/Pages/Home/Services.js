import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        }
    ];
    return (
        <div className='my-28 p-8'>
            <div className='text-center'>
                <h3 className='text-primary text-3xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-2xl'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div className="hero min-h-screen px-16">
                    <div className="hero-content flex-col lg:flex-row">
                        <img alt='' src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">In our cheerful dental practice, we offer high-quality dental care. Spearwood Dentist Dr Alexis Ong and her team provide gentle dentistry to all ages. Exceptional Dental Care is a full-service dental office. Therefore, you won't have to run all over town to get the dental treatments you want and need. Plus, our care is affordable.</p>
                            <button className="btn mt-4 btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to primary"> <Link to="/appointment">Get Started</Link> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;