import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import remove from '../../assets/icons/delete.png';
import DeleteAccountantModal from './DeleteAccountantModal';


const Accountant = () => {
    let [Accountants, setAccountants] = useState([]);
    const [deletingAccountant, setDeletingAccountant] = useState(null);
    const { data: accountants, isLoading, refetch } = useQuery('accountants', () => fetch(' https://hospital-management-9ou8.onrender.com/accountant', {
        headers: {

            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleSearch = e => {
        e.preventDefault();
        
        const search = e.target.text.value;
        
        fetch(` https://hospital-management-9ou8.onrender.com/accountants?name=${search}`)
          .then(res => res.json())
          .then(data => {
            setAccountants(data)
           
          });
        e.target.reset();
        
      }

    return (
        <div>
            <Link className='bg-yellow-500 border-2 border-yellow-500 rounded-lg p-2 mb-4' to="/dashboard/addAccountant">+ Add Accountant</Link>
            <form className='mt-6' onSubmit={handleSearch} >
            <input type="text" name='text' placeholder='Search accountant by name' class="w-80   input input-sm input-bordered" />
            <input className='ml-2 btn btn-sm ms-2 btn-primary' type="submit" value="Search" />
            

          </form>
          {Accountants.length===0?<span className='font-semibold text-lg'>Total Accountant:{accountants.length}</span>:<span className='font-semibold text-lg'>Total Accountant:{Accountants.length}</span>}
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
                            Accountants.length===0? accountants.map((accountant, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
                                <td className=' px-6'>{index + 1}</td>
                                <td className=' px-6'><div class="avatar">
                                    <div class="w-10 m-0 p-0 rounded-full  ring-2 ring-black ">
                                        <img src={accountant.img} alt='' />
                                    </div>
                                </div></td>

                                <td className=' px-6'>{accountant.name}</td>
                                <td className=' px-6'>{accountant.mobile}</td>
                                <td className=' px-6'>{accountant.email}</td>
                                <td className=' px-6'>{accountant.sex}</td>
                                <td className=' px-6'>{accountant.blood}</td>
                                <td className=' px-6'>{accountant.age}</td>
                                <td className=' px-6'>{accountant.address}</td>
                                <td className=' px-6'>
                                    <label onClick={() => setDeletingAccountant(accountant)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
                                </td>
                            </tr>):Accountants.map((accountant, index) =><tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
                                <td className=' px-6'>{index + 1}</td>
                                <td className=' px-6'><div class="avatar">
                                    <div class="w-10 m-0 p-0 rounded-full  ring-2 ring-black ">
                                        <img src={accountant.img} alt='' />
                                    </div>
                                </div></td>

                                <td className=' px-6'>{accountant.name}</td>
                                <td className=' px-6'>{accountant.mobile}</td>
                                <td className=' px-6'>{accountant.email}</td>
                                <td className=' px-6'>{accountant.sex}</td>
                                <td className=' px-6'>{accountant.blood}</td>
                                <td className=' px-6'>{accountant.age}</td>
                                <td className=' px-6'>{accountant.address}</td>
                                <td className=' px-6'>
                                    <label onClick={() => setDeletingAccountant(accountant)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {deletingAccountant && <DeleteAccountantModal
                deletingAccountant={deletingAccountant}
                setDeletingAccountant={setDeletingAccountant}
                refetch={refetch}></DeleteAccountantModal>}
        </div>
    );
};

export default Accountant;