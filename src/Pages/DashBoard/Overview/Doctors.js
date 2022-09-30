import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import doctor from '../../../assets/icons/doctor.png';

const Doctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch(' http://localhost:5000/doctor', {
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
          <h2 className="ml-4 mt-2 text-3xl font-bold ">{doctors.length}</h2>
            
          
          <p className='mt-4 ml-4 text-xl font-semibold text-green-700'>Doctors</p>
          </div>
          <div className='ml-20 mt-4'>
            <img className='h-20 ' src={doctor} alt="" />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Doctors;