import React from 'react';
import doctor from '../../assets/images/doctor.png';
import background from '../../assets/images/appointment.png';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
       <section style={{
           background:`url(${background})`
       }} className='flex justify-center items-center py-2 px-5'>
           <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px] ' src={doctor} alt="" />
           </div>
           <div className='flex-1'>
               <h3 className='text-xl text-primary font-bold'>Appointment</h3>
               <h2 className='text-3xl text-white my-4'>Make An Appointment Today</h2>
               <p className='text-white my-4'>Find the right doctor. Read reviews from verified patients and book an appointment with a nearby, in-network doctor.</p>

               <button className="btn mt-4 btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to primary"> <Link to="/appointment">Get Started</Link> </button>
           </div>
       </section>
    );
};

export default MakeAppointment;