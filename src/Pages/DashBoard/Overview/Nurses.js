import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import nurseIcon from '../../../assets/icons/nurse.png';

const Nurses = () => {
  const { data: nurses, isLoading, refetch } = useQuery('nurses', () => fetch(' https://powerful-plateau-90073.herokuapp.com/nurse', {
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
          <h2 className="ml-4 mt-2 text-3xl font-bold ">{nurses.length}</h2>
            
          
          <p className='mt-4 ml-4 text-xl font-semibold text-green-500'>Nurses</p>
          </div>
          <div className='ml-20 mt-4'>
            <img className='h-20 ' src={nurseIcon} alt="" />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Nurses;