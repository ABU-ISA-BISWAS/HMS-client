import { format } from 'date-fns';
import React, {  useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({date}) => {
    // const [services,setServices]=useState([]);
    const [treatment,setTreatment]=useState(null);
    const formattedDate =format(date,'PP');
    const {data:services,isLoading,refetch}=useQuery(['available',formattedDate],()=>fetch(` https://hospital-management-9ou8.onrender.com/available?date=${formattedDate}`)
         .then(res=> res.json()))
         if(isLoading){
             return <Loading></Loading>
         }
    // useEffect(()=>{
    //     fetch(` https://hospital-management-9ou8.onrender.com/available?date=${formattedDate}`)
    //     .then(res=> res.json())
    //     .then(data=>setServices(data));
    // },[formattedDate]);
    return (
        <div>
           <h4 className='text-xl mb-6 text-secondary text-center font-bold'> Available Appointments on <span className='text-red-500'>{format(date,'PP')}</span></h4>
           <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
               {
                   services?.map(service=><Service
                   key={service._id}
                   service={service}
                   setTreatment ={setTreatment}
                   
                   ></Service>)
               }
           </div>
           {treatment && <BookingModal date={date}
            treatment={treatment} 
            setTreatment={setTreatment}
             refetch={refetch}
             ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;