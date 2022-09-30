import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import remove from '../../assets/icons/delete.png';


const Doctor = () => {
  let [Doctors, setDoctors] = useState([]);
  const [deletingDoctor ,setDeletingDoctor]=useState(null);
  const {data:doctors,isLoading,refetch}=useQuery('doctors',()=>fetch(' https://powerful-plateau-90073.herokuapp.com/doctor',{
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
    
    fetch(` https://powerful-plateau-90073.herokuapp.com/doctors?name=${search}`)
      .then(res => res.json())
      .then(data => {
        setDoctors(data)
       
      });
    e.target.reset();
    
  }

    return (
        <div>
        <Link className='bg-yellow-500 border-2 border-yellow-500 rounded-lg p-2 mb-4' to="/dashboard/addDoctor">+ Add Doctor</Link>
        <form className='mt-6' onSubmit={handleSearch} >
            <input type="text" name='text' placeholder='Search doctor by name' class="w-80   input input-sm input-bordered" />
            <input className='ml-2 btn btn-sm ms-2 btn-primary' type="submit" value="Search" />
            

          </form>
          {Doctors.length===0?<span className='font-semibold text-lg'>Total Doctor:{doctors.length}</span>:<span className='font-semibold text-lg'>Total Doctor:{Doctors.length}</span>}
        <div class="overflow-x-auto mt-4">
  <table class="overflow-hidden w-11/12 shadow-2xl font-[Poppins] border-2 border-black">
   
    <thead className='text-white'>
      <tr>
        <th className="bg-slate-900  py-3">S.No</th>
        <th className="bg-slate-900  py-3">Avatar</th>
        <th className="bg-slate-900  py-3">Name</th>
        <th className="bg-slate-900  py-3">Specialty</th>
        <th className="bg-slate-900  py-3">Mobile</th>
        
        <th className="bg-slate-900  py-3">Sex</th>
        <th className="bg-slate-900  py-3">Blood Group</th>
        <th className="bg-slate-900  py-3">Age</th>
        <th className="bg-slate-900  py-3">Address</th>
        <th className="bg-slate-900  py-3">Action</th>
      </tr>
    </thead>
    <tbody className='text-cyan-900 text-center'>
     
     {
         Doctors.length===0? doctors.map((doctor, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
            <td className=' px-6'>{index+1}</td>
            <td className=' px-6'><div class="avatar">
  <div class="w-10 m-0 p-0 rounded-full  ring-2 ring-black ">
    <img src={doctor.img} alt='' />
  </div>
</div></td>
            <td className=' px-6'>{doctor.name}</td>
            <td className=' px-6'>{doctor.specialty}</td>
            <td className=' px-6'>{doctor.mobile}</td>
            
            <td className=' px-6'>{doctor.sex}</td>
            <td className=' px-6'>{doctor.blood}</td>
            <td className=' px-6'>{doctor.age}</td>
            <td className=' px-6'>{doctor.address}</td>
            <td className=' px-6'>
            <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
               </td>
          </tr>):Doctors.map((doctor, index) =><tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
            <td className=' px-6'>{index+1}</td>
            <td className=' px-6'><div class="avatar">
  <div class="w-10 m-0 p-0 rounded-full  ring-2 ring-black ">
    <img src={doctor.img} alt='' />
  </div>
</div></td>
            <td className=' px-6'>{doctor.name}</td>
            <td className=' px-6'>{doctor.specialty}</td>
            <td className=' px-6'>{doctor.mobile}</td>
            
            <td className=' px-6'>{doctor.sex}</td>
            <td className=' px-6'>{doctor.blood}</td>
            <td className=' px-6'>{doctor.age}</td>
            <td className=' px-6'>{doctor.address}</td>
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

export default Doctor;