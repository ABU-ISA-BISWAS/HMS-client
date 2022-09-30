import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className=' p-4 grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard cardBody="24/7" cardTitle="Opening Hours" img={clock} bgClass="bg-gradient-to-r from-secondary to primary"></InfoCard>
            <InfoCard cardBody="Dhaka,Bangladesh" cardTitle="Our Location" img={marker} bgClass="bg-accent"></InfoCard>
            <InfoCard cardBody="+8801741968088" cardTitle="Contact Us" img={phone} bgClass="bg-gradient-to-r from-secondary to primary"></InfoCard>
        </div>
    );
};

export default Info;