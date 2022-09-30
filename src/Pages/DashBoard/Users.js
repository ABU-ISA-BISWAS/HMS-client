import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';


const Users = () => {
 
    const {data:users,isLoading,refetch}= useQuery('users',()=> fetch(' https://powerful-plateau-90073.herokuapp.com/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}` 
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }

    
    return (
        <div>
            
            <div class="overflow-x-auto">
  <table class=" overflow-hidden w-6/12 shadow-2xl font-[Poppins] border-2 border-black">
   
    <thead className='text-white' >
      <tr className="">
        <th className="bg-slate-900  py-3">S.No</th>
        <th className="bg-slate-900  py-3 ">Email</th>
        <th className="bg-slate-900  py-3">Make Admin</th>
        <th className="bg-slate-900 py-3 ">Delete User</th>
      </tr>
    </thead>
    <tbody className='text-cyan-900 text-center'>
     
      {users.map((user,index)=><UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>)}
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Users;