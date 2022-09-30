import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import labIcon from '../../../assets/icons/lab.png';

const Laboratorists = () => {
  const { data: laboratorists, isLoading, refetch } = useQuery('laboratorists', () => fetch(' http://localhost:5000/laboratorist', {
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
          <h2 className="ml-4 mt-2 text-3xl font-bold ">{laboratorists.length}</h2>
            
          
          <p className='mt-4 ml-4 text-xl font-semibold text-purple-600'>Laboratorists</p>
          </div>
          <div className='ml-20 mt-4'>
            <img className='h-20 ' src={labIcon} alt="" />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Laboratorists;