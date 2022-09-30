import React from 'react';
import { toast } from 'react-toastify';

const DeleteLaboratoristModal = ({deletingLaboratorist,refetch,setDeletingLaboratorist}) => {
  const {name}=deletingLaboratorist;
  const handleDelete=(email,name) => {
    fetch(` https://powerful-plateau-90073.herokuapp.com/laboratorist/${email}`,{
        method:'DELETE',
        headers:{
          
            authorization:`Bearer ${localStorage.getItem('accessToken')}` 
        }

    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
            toast.success(`Pharmacist:${name} is deleted.`)
            setDeletingLaboratorist(null);
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
      <button onClick={() => handleDelete(deletingLaboratorist.email)} class="btn btn-error btn-xs">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteLaboratoristModal;