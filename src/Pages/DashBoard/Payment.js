import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
  
const stripePromise = loadStripe('pk_test_51L3wRuDyuXL0kAMD3cphavXLnw1gEqOUigSPpw6ZD6JG6Hy9zaKWenWK6gDsLc9uEyaPaikbDsO412aTUvdIJayU00Leok4N8P');
const Payment = () => {
    const {id}=useParams();
    const url = ` https://powerful-plateau-90073.herokuapp.com/booking/${id}`;
    const {data: appointment, isLoading}=useQuery(['booking',id], () => fetch(url,{
        method:'GET',
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        
  <div>
  <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 border-2 border-green-500">
  <div class="card-body">
      <p className='text-secondary font-serif text-lg font-semibold'>Hello, {appointment.patientName}</p>
    <h2 class="card-title font-serif">Please Pay for {appointment.treatment}</h2>
    <p className='font-serif'>Your Appointment : <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
    <p className='font-serif font-bold'>Pay : ${appointment.price} </p>
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl border-2 border-green-500 bg-base-100">
      <div class="card-body">
      <Elements stripe={stripePromise}>
    <CheckoutForm appointment={appointment} />
  </Elements>
      
        
      </div>
    </div>
  </div>

    );
};

export default Payment;