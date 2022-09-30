import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import remove from '../../assets/icons/delete.png';
import Loading from '../Shared/Loading';
import DeleteAppointmentModal from './DeleteAppointmentModal';

const Appointments = () => {
    let [Appointments, setAppointments] = useState([]);
    const [deletingAppointment ,setDeletingAppointment]=useState(null);
    let {data:appointments,isLoading,refetch}=useQuery('appointments',()=>fetch(' http://localhost:5000/appointment',{
        headers:{
          
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res=>res.json())); 
    if(isLoading){
        return <Loading></Loading>
    }
    const handleSearch = e => {
        e.preventDefault();
        
        const search = e.target.text.value;
        
        fetch(` http://localhost:5000/appointments?phone=${search}`)
          .then(res => res.json())
          .then(data => {
            setAppointments(data)
           
          });
        e.target.reset();
        
      }
    return (
        <div> 
      
      
      <form className='mt-6' onSubmit={handleSearch} >
            <input type="text" name='text' placeholder='Search by phone number' class="w-80   input input-sm input-bordered" />
            <input className='ml-2 btn btn-sm ms-2 btn-primary' type="submit" value="Search" />
            

          </form>
          {Appointments.length===0?<span className='font-semibold text-lg'>Total Appointment:{appointments.length}</span>:<span className='font-semibold text-lg'>Total Appointment:{Appointments.length}</span>}
      <div className='mt-4'>
        <table class="overflow-hidden w-11/12 shadow-2xl text-sm font-[Poppins] border-2 border-black">

          <thead className='text-white'>
            <tr>
              <th className="bg-slate-900  py-3">S.No</th>
              
              <th className="bg-slate-900  py-3">Patient Name</th>
              <th className="bg-slate-900  py-3">Mobile</th>
              <th className="bg-slate-900  py-3">Email</th>
              <th className="bg-slate-900  py-3">Date</th>
              <th className="bg-slate-900  py-3">Slot</th>
              <th className="bg-slate-900  py-3">Treatment</th>
              <th className="bg-slate-900  py-3">Payment Status</th>
              <th className="bg-slate-900  py-3">Action</th>
            </tr>
          </thead>
          <tbody className='text-cyan-900 text-center'>

            {
            Appointments.length===0? appointments.map((appointment, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
            <td className=' px-6'>{index + 1}</td>
            <td className=' px-6'>{appointment.patientName}</td>
            <td className=' px-6'>{appointment.phone}</td>
            <td className=' px-6'>{appointment.patient}</td>
            <td className=' px-6'>{appointment.date}</td>
            <td className=' px-6'>{appointment.slot}</td>
            <td className=' px-6'>{appointment.treatment}</td>
            
            {appointment.paid==="paid"?<td className='text-green-500 px-6'>{appointment.paid}</td>:<td className='text-red-500 px-6'>{appointment.paid}</td>}
            
            
            <td className=' px-6'>
              <label onClick={() => setDeletingAppointment(appointment)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
            </td>
          </tr>)
          :Appointments.map((appointment, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
          <td className=' px-6'>{index + 1}</td>
          <td className=' px-6'>{appointment.patientName}</td>
          <td className=' px-6'>{appointment.phone}</td>
          <td className=' px-6'>{appointment.patient}</td>
          <td className=' px-6'>{appointment.date}</td>
          <td className=' px-6'>{appointment.slot}</td>
          <td className=' px-6'>{appointment.treatment}</td>
          {appointment.paid==="paid"?<td className='text-green-500 px-6'>{appointment.paid}</td>:<td className='text-red-500 px-6'>{appointment.paid}</td>}
         
          {/* <td className=' px-6'>{appointment.treatmentId}</td> */}
          <td className=' px-6'>
            <label onClick={() => setDeletingAppointment(appointment)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
          </td>
        </tr>)
            }

          </tbody>
        </table>
      </div>
      {deletingAppointment && <DeleteAppointmentModal
deletingAppointment={deletingAppointment}
setDeletingAppointment={setDeletingAppointment}
refetch={refetch}></DeleteAppointmentModal>}
    </div>
    );
};

export default Appointments;