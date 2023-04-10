import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const BedAllotment = () => {
    let {data:bedAllotments,isLoading,refetch}=useQuery('bedAllotments',()=>fetch(' https://hospital-management-9ou8.onrender.com/bedAllotment',{
        headers:{
          
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res=>res.json())); 
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Link className='bg-yellow-500 border-2 border-yellow-500 rounded-lg p-2 ' to="/dashboard/bedManagement">+ Add Allotment</Link>
            <table class="overflow-hidden mt-6 w-11/12 shadow-2xl font-[Poppins] text-sm border-2 border-black">

          <thead className='text-white'>
            <tr>
              <th className="bg-slate-900  py-3">#</th>
              <th className="bg-slate-900  py-3">Patient Name</th>
              <th className="bg-slate-900  py-3">Patient Phone</th>
              <th className="bg-slate-900  py-3">Bed Number</th>
              <th className="bg-slate-900  py-3">Bed Type</th>
              <th className="bg-slate-900  py-3">Caretaker</th>
              <th className="bg-slate-900  py-3">Allotted Date</th>
              <th className="bg-slate-900  py-3">Allotted Time</th>
             
            </tr>
          </thead>
          <tbody className='text-cyan-900 text-center'>

            {
            bedAllotments.map((bedAllotment, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
            <td className=' px-6'>{index + 1}</td>
            
            <td className=' px-6'>{bedAllotment.patientName}</td>
            <td className=' px-6'>{bedAllotment.patientPhone}</td>
            <td className=' px-6'>{bedAllotment.bedNumber}</td>
            <td className=' px-6'>{bedAllotment.bedType}</td>
            <td className=' px-6'>{bedAllotment.careTaker}</td>
            <td className=' px-6'>{bedAllotment.allotmentDate}</td>
            <td className=' px-6'>{bedAllotment.allotmentTime}</td>
            
            {/* <td className=' px-6'>
              <label onClick={() => setDeletingPatient(patient)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
            </td> */}
          </tr>)
          
            }

          </tbody>
        </table>
        </div>
    );
};

export default BedAllotment;