import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date,setTreatment,refetch }) => {
    const {_id, name, slots,price } = treatment;
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(date,'PP');
    const handleBooking = event =>{
        event.preventDefault();
        const slot =event.target.slot.value; 
        const booking ={
            treatmentId:_id,
            treatment:name,
            date:formattedDate,
            slot,
            price,
            patient:user.email,
            patientName:user.displayName,
            phone:event.target.phone.value,
            paid:'unpaid'
        }
        fetch(' https://hospital-management-9ou8.onrender.com/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.success){
               toast(`Appointment is set,${formattedDate} at ${slot}`) 
            }
            else{
                toast.error(`Already have an appointment on,${data.booking?.date} at ${data.booking?.slot}`) 
            }
            refetch();
            setTreatment(null);
        })
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-semibold text-xl text-secondary font-serif">Booking for: <span className='text-blue-500'>{name}</span></h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-sm input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-sm select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index)=><option key={index} value={slot}>{slot}</option>)
                            }
                           
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-sm input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} class="input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-sm input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" class="btn btn-sm btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;