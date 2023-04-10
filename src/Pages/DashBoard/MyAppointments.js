import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {signOut} from 'firebase/auth';

const MyAppointments = () => {

    const [appointments,setAppointments]=useState([]);
    const [user]=useAuthState(auth);
    const navigate =useNavigate();
    useEffect(()=>{
        if(user){
            fetch(` https://hospital-management-9ou8.onrender.com/booking?patient=${user.email}`,{
              method:'GET',
              headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
              }
            })
        .then(res=>{
          if(res.status === 401  ||res.status === 403 ){
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
         
          return res.json()})
        .then(data=>{

          setAppointments(data)
        });
        }
    },[user,navigate])
    return (
        <div>
            <p className='mb-6 text-lg font-serif'>My Appointments: <span className='font-semibold text-xl text-purple-500'>{appointments.length}</span></p>
            <div class="overflow-x-auto">
  <table class="overflow-hidden w-11/12 shadow-2xl text-sm font-[Poppins] border-2 border-black">
    {/* <!-- head --> */}
    <thead className='text-white'>
      <tr>
        <th className="bg-slate-900  py-3">#</th>
        <th className="bg-slate-900  py-3">Name</th>
        <th className="bg-slate-900  py-3">Date</th>
        <th className="bg-slate-900  py-3">Time</th>
        <th className="bg-slate-900  py-3">Treatment</th>
        <th className="bg-slate-900  py-3">Payment</th>
      </tr>
    </thead>
    <tbody>
     {
         appointments.map((a,index)=><tr className='border-2 border-black   cursor-pointer duration-300 ' key={a._id}>
           <td className=' px-6'>{index+1}</td>
            <td className=' px-6'>{a.patientName}</td>
            <td className=' px-6'>{a.date}</td>
            <td className=' px-6'>{a.slot}</td>
            <td className=' px-6'>{a.treatment}</td>
            <td className=' px-6'>
              {(a.price && a.paid==="unpaid") && <Link to={`/dashboard/payment/${a._id}`} ><button className='btn btn-xs btn-success'>Pay</button></Link>}
              {(a.price && a.paid==="paid") &&   <div>
                  <p className='text-success'>Paid</p>
                  <p>Transaction Id: <span className='text-success'>{a.transactionId}</span></p>
                </div>}
            </td>
          </tr>)
     }
   
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;