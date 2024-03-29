import React from 'react';
import { toast } from 'react-toastify';

const DeleteAccountantModal = ({deletingAccountant,refetch,setDeletingAccountant}) => {
  const {name}=deletingAccountant;
  const handleDelete=(email,name) => {
    fetch(` https://hospital-management-9ou8.onrender.com/accountant/${email}`,{
        method:'DELETE',
        headers:{
          
            authorization:`Bearer ${localStorage.getItem('accessToken')}` 
        }

    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
            toast.success(`Accountant:${name} is deleted.`)
            setDeletingAccountant(null);
            refetch();
        }
    })
}
    return (
        <div>
          



<input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-red-500 text-lg">Are yo sure you want to delete {name}!</h3>
  
    <div class="modal-action">
      <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
      <button onClick={() => handleDelete(deletingAccountant.email)} class="btn btn-error btn-xs">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteAccountantModal;