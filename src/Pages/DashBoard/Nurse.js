import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import remove from '../../assets/icons/delete.png';
import DeleteNurseModal from './DeleteNurseModal';

const Nurse = () => {
  let [Nurses, setNurses] = useState([]);
  const [deletingNurse ,setDeletingNurse]=useState(null);
  const {data:nurses,isLoading,refetch}=useQuery('nurses',()=>fetch(' http://localhost:5000/nurse',{
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
    
    fetch(` http://localhost:5000/nurses?name=${search}`)
      .then(res => res.json())
      .then(data => {
        setNurses(data)
       
      });
    e.target.reset();
    
  }
    return (
        <div>
        <Link className='bg-yellow-500 border-2 border-yellow-500 rounded-lg p-2 mb-4' to="/dashboard/addNurse">+ Add Nurse</Link>
        <form className='mt-6' onSubmit={handleSearch} >
            <input type="text" name='text' placeholder='Search nurse by name' class="w-80   input input-sm input-bordered" />
            <input className='ml-2 btn btn-sm ms-2 btn-primary' type="submit" value="Search" />
            

          </form>
          {Nurses.length===0?<span className='font-semibold text-lg'>Total Nurse:{nurses.length}</span>:<span className='font-semibold text-lg'>Total Nurse:{Nurses.length}</span>}
        <div class="overflow-x-auto mt-4">
  <table class="overflow-hidden w-11/12 shadow-2xl font-[Poppins] border-2 border-black">
   
    <thead className='text-white'>
      <tr>
        <th className="bg-slate-900  py-3">S.No</th> 
        <th className="bg-slate-900  py-3">Avatar</th>
        <th className="bg-slate-900  py-3">Name</th>

        <th className="bg-slate-900  py-3">Mobile</th>
        <th className="bg-slate-900  py-3">Email</th>
        <th className="bg-slate-900  py-3">Sex</th>
        <th className="bg-slate-900  py-3">Blood Group</th>
        <th className="bg-slate-900  py-3">Age</th>
        <th className="bg-slate-900  py-3">Address</th>
        <th className="bg-slate-900  py-3">Action</th>
      </tr>
    </thead>
    <tbody className='text-cyan-900 text-center'>
     
     {
         Nurses.length===0? nurses.map((nurse, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
            <td className=' px-6'>{index+1}</td>
            <td className=' px-6'><div class="avatar">
  <div class="w-10 m-0 p-0 rounded-full  ring-2 ring-black ">
    <img src={nurse.img} alt='' />
  </div>
</div></td>
            
            <td className=' px-6'>{nurse.name}</td>
            <td className=' px-6'>{nurse.mobile}</td>
            <td className=' px-6'>{nurse.email}</td>
            <td className=' px-6'>{nurse.sex}</td>
            <td className=' px-6'>{nurse.blood}</td>
            <td className=' px-6'>{nurse.age}</td>
            <td className=' px-6'>{nurse.address}</td>
            <td className=' px-6'>
            <label onClick={() => setDeletingNurse(nurse)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
               </td>
          </tr>)
          :Nurses.map((nurse, index) =><tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
          <td className=' px-6'>{index+1}</td>
          <td className=' px-6'><div class="avatar">
<div class="w-10 m-0 p-0 rounded-full  ring-2 ring-black ">
  <img src={nurse.img} alt='' />
</div>
</div></td>
          
          <td className=' px-6'>{nurse.name}</td>
          <td className=' px-6'>{nurse.mobile}</td>
          <td className=' px-6'>{nurse.email}</td>
          <td className=' px-6'>{nurse.sex}</td>
          <td className=' px-6'>{nurse.blood}</td>
          <td className=' px-6'>{nurse.age}</td>
          <td className=' px-6'>{nurse.address}</td>
          <td className=' px-6'>
          <label onClick={() => setDeletingNurse(nurse)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
             </td>
        </tr>)
     }
     
    </tbody>
  </table>
</div>
{deletingNurse && <DeleteNurseModal
deletingNurse={deletingNurse}
setDeletingNurse={setDeletingNurse}
refetch={refetch}></DeleteNurseModal>}
      </div>
    );
};

export default Nurse;