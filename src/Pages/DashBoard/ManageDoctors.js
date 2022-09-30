import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import remove from '../../assets/icons/delete.png';



const ManageDoctors = () => {
    const [deletingDoctor ,setDeletingDoctor]=useState(null);
    const {data:doctors,isLoading,refetch}=useQuery('doctors',()=>fetch(' http://localhost:5000/doctor',{
        headers:{
          
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            
            <div class="overflow-x-auto">
  <table class="overflow-hidden w-6/12 shadow-2xl font-[Poppins] border-2 border-black">
   
    <thead className='text-white'>
      <tr>
        <th className="bg-slate-900  py-3">S.No</th>
        <th className="bg-slate-900  py-3">Avatar</th>
        <th className="bg-slate-900  py-3">Name</th>
        <th className="bg-slate-900  py-3">Specialty</th>
        <th className="bg-slate-900  py-3">Action</th>
      </tr>
    </thead>
    <tbody className='text-cyan-900 text-center'>
     
     {
         doctors.map((doctor,index)=> <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
            <td className=' px-6'>{index+1}</td>
            <td className=' px-6'><div class="avatar">
  <div class="w-10 m-0 p-0 rounded-full  ring-2 ring-black ">
    <img src={doctor.img} alt='' />
  </div>
</div></td>
            <td className=' px-6'>{doctor.name}</td>
            <td className=' px-6'>{doctor.specialty}</td>
            <td className=' px-6'>
            <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
               </td>
          </tr>)
     }
     
    </tbody>
  </table>
</div>
{deletingDoctor && <DeleteConfirmModal
deletingDoctor={deletingDoctor}
setDeletingDoctor={setDeletingDoctor}
refetch={refetch}></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;