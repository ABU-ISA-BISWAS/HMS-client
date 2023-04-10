import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import accountantIcon from '../../../assets/icons/accountant.png';

const Accountants = () => {
  const { data: accountants, isLoading, refetch } = useQuery('accountants', () => fetch(' https://hospital-management-9ou8.onrender.com/accountant', {
        headers: {

            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-72 h-28  shadow-lg">
        <div className="w-11/12 flex ">
          <div>
          <h2 className="ml-4 mt-2 text-3xl font-bold ">{accountants.length}</h2>
            
          
          <p className='mt-4 ml-4 text-xl font-semibold text-red-400'>Accountants</p>
          </div>
          <div className='ml-20 mt-4'>
            <img className='h-20 ' src={accountantIcon} alt="" />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Accountants;