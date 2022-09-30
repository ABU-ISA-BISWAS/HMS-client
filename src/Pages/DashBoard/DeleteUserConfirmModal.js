import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserConfirmModal = ({deletingUser,refetch,setDeletingUser}) => {
  const handleDelete=(email) => {
    fetch(` http://localhost:5000/user/${email}`,{
        method:'DELETE',
        headers:{
          
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }

    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
            toast.success(`Successfully deleted.`)
            setDeletingUser(null);
            refetch();
        }
    })
}
    return (
        <div>
          



<input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-red-500 text-lg">Are yo sure you want to delete!</h3>
    <p class="py-4">{deletingUser.email}</p>
    <div class="modal-action">
      <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
      <button onClick={() => handleDelete(deletingUser.email)} class="btn btn-error btn-xs">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteUserConfirmModal;