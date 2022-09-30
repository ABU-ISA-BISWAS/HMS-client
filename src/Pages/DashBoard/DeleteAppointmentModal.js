import React from 'react';
import { toast } from 'react-toastify';

const DeleteAppointmentModal = ({deletingAppointment,refetch,setDeletingAppointment}) => {
  const {patientName}=deletingAppointment;
  const handleDelete=(patient) => {
    fetch(` https://powerful-plateau-90073.herokuapp.com/appointment/${patient}`,{
        method:'DELETE',
        headers:{
          
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }

    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
            toast.success(`Successfully deleted.`)
            setDeletingAppointment(null);
            refetch();
        }
    })
}
    return (
        <div>
          



<input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-red-500 text-lg">Are yo sure you want to delete {patientName} !</h3>
  
    <div class="modal-action">
      <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
      <button onClick={() => handleDelete(deletingAppointment.patient)} class="btn btn-error btn-xs">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteAppointmentModal;