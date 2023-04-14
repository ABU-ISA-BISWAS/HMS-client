import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Navbar from '../Shared/Navbar';


const Home = () => {
    return (
        <div className='bg-gray-100 font-serif'>
            
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>

       
        </div>
    );
};

export default Home;