import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPharmacist = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const imgStorageKey ='2020a41af86572042a381fac5a0d0d99';
  
    const onSubmit = async data => {
        const image =data.image[0];
        const formData =new FormData();
        formData.append('image',image);
        const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
           if(result.success){
               const img = result.data.url;
               const pharmacist = {
                   name:data.name,
                   email:data.email,
                   mobile:data.mobile,
                   sex:data.sex,
                   age:data.age,
                   blood:data.blood,
                   address:data.address,
                   remarks:data.remarks,
                   img:img
               }
               //send to your database
               fetch(' https://hospital-management-9ou8.onrender.com/pharmacist',{
                   method:'POST',
                   headers:{
                       'content-type':'application/json',
                       authorization:`Bearer ${localStorage.getItem('accessToken')}`
                   },
                   body: JSON.stringify(pharmacist)
  
               })
               .then(res=>res.json())
               .then(inserted=>{
                if(inserted.insertedId){
                    toast.success('Pharmacist added successfully');
                    reset();
                }
                else{
                    toast.error('Failed to add the Pharmacist');
                }
               })
           }
        })
  
  
    };
    return (
        <div className=''>
            <Link className='bg-yellow-500 border-2 border-yellow-500 rounded-lg p-2 mb-4' to="/dashboard/pharmacist">  ⇚</Link>
        <h2 className='ml-1 font-serif font-bold text-lg text-sky-800 mt-5'>Add a new pharmacist</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='flex'>
                <div className='w-4/12'>
                <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Name</span>
                </label>

                <input  {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is Required'
                    },

                })}
                    type="text" placeholder="Your Name" class="input input-sm input-bordered w-full max-w-xs" />


                <label class="label">
                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                </label>

            </div>

            

          

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Mobile</span>
                </label>
                <input  {...register("mobile", {
                    required: {
                        value: true,
                        message: 'Mobile is Required'
                    },

                })}  type="number" placeholder="Your Mobile Number" class="input input-sm input-bordered w-full max-w-xs" />

                <label class="label">
                    {errors.mobile?.type === 'required' && <span class="label-text-alt text-red-500">{errors.mobile.message}</span>}
                </label>

            </div>

            

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Sex</span>
                </label>
                <select {...register('sex')} class="input-bordered input-sm select w-full max-w-xs">

                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    

                </select>



                <label class="label">
                    {errors.sex?.type === 'required' && <span class="label-text-alt text-red-500">{errors.sex.message}</span>}
                   

                </label>

                <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Age</span>
                </label>
                <input  {...register("age", {
                    required: {
                        value: true,
                        message: 'Age is Required'
                    },

                })}  type="number" placeholder="Your Age" class="input input-sm input-bordered w-full max-w-xs" />

                <label class="label">
                    {errors.age?.type === 'required' && <span class="label-text-alt text-red-500">{errors.age.message}</span>}
                </label>

            </div>

                <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Photo</span>
                </label>

                <input  {...register("image", {
                    required: {
                        value: true,
                        message: 'Image is Required'
                    },

                })}
                    type="file" class="input input-sm input-bordered w-full p-1 font-semibold h-12 max-w-xs" />


                <label class="label">
                    {errors.image?.type === 'required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}

                </label>

                

            </div>

                

            </div>

           
                </div>

                <div className='w-4/12'>
                <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>

                <input  {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is Required'
                    },
                    pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a Valid Email'
                    }
                })}
                    type="email" placeholder="Your Email" class="input input-sm input-bordered w-full max-w-xs" />


                <label class="label">
                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                </label>

            </div>
              

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Blood Group</span>
                </label>
                <input  {...register("blood", {
                    required: {
                        value: true,
                        message: 'Blood Group is Required'
                    },

                })}  type="text" placeholder="Your Blood Group" class="input input-sm input-bordered w-full max-w-xs" />

                <label class="label">
                    {errors.blood?.type === 'required' && <span class="label-text-alt text-red-500">{errors.blood.message}</span>}
                </label>

            </div>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Address</span>
                </label>
                <input  {...register("address", {
                    required: {
                        value: true,
                        message: 'Address is Required'
                    },

                })}  type="text" placeholder="Your Address" class="input input-sm input-bordered w-full max-w-xs mb-1" />

                <label class="label">
                    {errors.address?.type === 'required' && <span class="label-text-alt text-red-500">{errors.address.message}</span>}
                </label>

                

            </div>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Remarks</span>
                </label>
                <input  {...register("remarks", {
                    required: {
                        value: false,
                        message: 'Remarks is Required'
                    },

                })}  type="text"  class="input input-sm input-bordered w-full max-w-xs " />

                

                

            </div>

            <input className='btn bg-sky-800 w-full max-w-xs mt-16' type="submit" value="Add" />

            
                </div>
            </div>



          



            
        </form>
    </div>
    );
};

export default AddPharmacist;