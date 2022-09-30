import React, { useState } from 'react';
import { toast } from 'react-toastify';
import remove from '../../assets/icons/delete.png';
import DeleteUserConfirmModal from './DeleteUserConfirmModal';


const UserRow = ({user,index,refetch}) => {
    const [deletingUser ,setDeletingUser]=useState(null);
    const {email,role}=user;
    const makeAdmin =()=>{
        fetch(` http://localhost:5000/user/admin/${email}`,{
        method:'PUT',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>{
        if(res.status ===403){
            toast.error('Failed to make an admin'); 
        }
        return res.json()})
    .then(data=>{
        if(data.modifiedCount >0){
            refetch();
        toast.success(`Successfully made an admin`);
        }
    })
    }
    return (
        <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
            
        <td className=' px-6'>{index+1}</td>
        <td className=' px-6'>{user.email}</td>
        <td className=' px-6'>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs bg-blue-600">Make Admin</button> :<button class="btn bg-green-700 btn-xs">Admin</button>}</td>
        <td className=' px-6'><label onClick={() => setDeletingUser(user)} for="delete-confirm-modal" class=" modal-button  btn-xs "><img className='w-6 cursor-pointer' src={remove} alt="" /></label></td>
      
      {deletingUser && <DeleteUserConfirmModal
        deletingUser={deletingUser}
        setDeletingUser={setDeletingUser}
        refetch={refetch}></DeleteUserConfirmModal>}
        </tr>
    );
};

export default UserRow;