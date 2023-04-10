import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import receptionistIcon from '../../../assets/icons/receptionist.png';

const Receptionists = () => {
  const { data: receptionists, isLoading, refetch } = useQuery('receptionists', () => fetch(' https://hospital-management-9ou8.onrender.com/receptionist', {
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
          <h2 className="ml-4 mt-2 text-3xl font-bold ">{receptionists.length}</h2>
            
          
          <p className='mt-4 ml-4 text-xl font-semibold text-red-800'>Receptionists</p>
          </div>
          <div className='ml-20 mt-4'>
            <img className='h-20 ' src={receptionistIcon} alt="" />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Receptionists;