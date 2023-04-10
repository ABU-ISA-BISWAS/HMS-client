import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import BedAllotmentModal from './BedAllotmentModal';

const BedManagement = () => {
    const [BedAllotment ,setBedAllotment]=useState(null);
    let {data:patients,isLoading,refetch}=useQuery('patients',()=>fetch(' https://hospital-management-9ou8.onrender.com/patient',{
        headers:{
          
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res=>res.json())); 
    if(isLoading){
        return <Loading></Loading>
    }
  
    return (
        <div>
             <Link className='bg-yellow-500 border-2 border-yellow-500 rounded-lg p-2 mb-4' to="/dashboard/bedAllotment">⇚</Link>
            <table class="overflow-hidden w-11/12 shadow-2xl font-[Poppins] mt-6 text-sm border-2 border-black">

<thead className='text-white'>
  <tr>
    <th className="bg-slate-900  py-3">S.No</th>
    <th className="bg-slate-900  py-3">Avatar</th>
    <th className="bg-slate-900  py-3">Name</th>
    <th className="bg-slate-900  py-3">Mobile</th>
    <th className="bg-slate-900  py-3">Email</th>
    <th className="bg-slate-900  py-3">Sex</th>
    <th className="bg-slate-900  py-3">Age</th>
    <th className="bg-slate-900  py-3">Blood</th>
    <th className="bg-slate-900  py-3">Address</th>
    
    <th className="bg-slate-900  py-3">Option</th>
  </tr>
</thead>
<tbody className='text-cyan-900 text-center'>

  {
  patients.map((patient, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
  <td className=' px-6'>{index + 1}</td>
  <td className=' px-6'><div class="avatar">
    <div class="w-10 m-0 p-0 rounded-full  ring-2 ring-black ">
      <img src={patient.img} alt='' />
    </div>
  </div></td>
  <td className=' px-6'>{patient.name}</td>
  <td className=' px-6'>{patient.mobile}</td>
  <td className=' px-6'>{patient.email}</td>
  <td className=' px-6'>{patient.sex}</td>
  <td className=' px-6'>{patient.age}</td>
  <td className=' px-6'>{patient.blood}</td>
  <td className=' px-6'>{patient.address}</td>
  
  <td className=' px-6'>
    {!patient.allotted ?<label onClick={() => setBedAllotment(patient)} for="delete-confirm-modal" className=" modal-button  btn-xs bg-green-700 rounded-lg cursor-pointer p-1">+ Allot</label>:<span>Allotted</span> }
  </td>
 
</tr>)

  }

</tbody>
</table>
{BedAllotment && <BedAllotmentModal
BedAllotment={BedAllotment}
setBedAllotment={setBedAllotment}
refetch={refetch}></BedAllotmentModal>}
        </div>
    );
};

export default BedManagement;