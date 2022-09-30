import React from 'react';

const Service = ({ service,setTreatment }) => {
    const {name,slots,price}=service;
    return (
        <div class="card w-96 h-60 bg-base-100 shadow-lg font-serif text-center">
            <div class="card-body">
                <p class=" text-secondary text-center text-2xl font-bold">{name}</p>
                <p>
                    {
                        slots.length>0 ?<span>{slots[0]}</span>: <span className='text-red-500'>Try another date.</span>
                    }
                </p>
                <p>{slots.length} {slots.length >1?'spaces':'space'} Available</p>
                <p><small>Price:${price}</small></p>
                <div class="card-actions justify-center">
                    <label htmlFor="booking-modal"
                     onClick={()=>setTreatment(service)}
                     disabled={slots.length===0}
                      class="btn btn-sm btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;