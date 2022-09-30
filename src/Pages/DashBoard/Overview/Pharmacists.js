import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import pharmacistIcon from '../../../assets/icons/pharmacist.png';

const Pharmacists = () => {
  const { data: pharmacists, isLoading, refetch } = useQuery('pharmacists', () => fetch(' http://localhost:5000/pharmacist', {
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
          <h2 className="ml-4 mt-2 text-3xl font-bold ">{pharmacists.length}</h2>
            
          
          <p className='mt-4 ml-4 text-xl font-semibold text-yellow-600'>Pharmacists</p>
          </div>
          <div className='ml-20 mt-4'>
            <img className='h-20 ' src={pharmacistIcon} alt="" />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Pharmacists;