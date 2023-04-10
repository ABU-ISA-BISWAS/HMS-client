import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Payments = () => {
    let {data:payments,isLoading,refetch}=useQuery('payments',()=>fetch(' https://hospital-management-9ou8.onrender.com/payment',{
        headers:{
          
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res=>res.json())); 
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
           <table class="overflow-hidden w-12/12 shadow-2xl font-[Poppins] border-2 border-black">

<thead className='text-white'>
  <tr>
    <th className="bg-slate-900  py-3">#</th>
    <th className="bg-slate-900  py-3">Name</th>
    <th className="bg-slate-900  py-3">Phone</th>
    <th className="bg-slate-900  py-3">Transaction Id</th>
   
  </tr>
</thead>
<tbody className='text-cyan-900 text-center'>

  {
   payments.map((payment, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
  <td className=' px-6'>{index + 1}</td>
  
  <td className=' px-6'>{payment.p_name}</td>
  <td className=' px-6'>{payment.phone}</td>
  <td className=' px-6'>{payment.transactionId}</td>

  
</tr>)

  }

</tbody>
</table> 
        </div>
    );
};

export default Payments;