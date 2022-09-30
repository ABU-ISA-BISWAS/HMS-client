import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const BedAllotmentModal = ({ BedAllotment, refetch, setBedAllotment }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { name, _id, mobile } = BedAllotment;
    const cDate = new Date().toLocaleDateString();
    const cTime = new Date().toLocaleTimeString();
    const onSubmit = async data => {
        const allotedBed = {
            careTaker: data.careTaker,
            bedType: data.bedType,
            bedNumber: data.bedNumber,
            patientName: name,
            patientPhone: mobile,
            allotmentDate:cDate,
            allotmentTime:cTime
        }
        fetch(` http://localhost:5000/patient/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(allotedBed)
        })
            .then(res => res.json())
            .then(data=>{
                if(data){
                    toast.success(`Successfully allotted.`)
                    setBedAllotment(null);
                    refetch();
                }
            })

    }
    return (
        <div>




            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div className="modal-box">


                    
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
                                    <div class="form-control w-full ">
                                        <label class="label">
                                            <span class="label-text font-serif  ">Care Taker</span>
                                        </label>

                                        <input  {...register("careTaker", {
                                            required: {
                                                value: true,
                                                message: 'Care Taker Name is Required'
                                            },

                                        })}
                                            type="text" placeholder="Care Taker Name" class=" input input-sm input-bordered w-full max-w-xs" />


                                        <label class="label">
                                            {errors.careTaker?.type === 'required' && <span class="label-text-alt text-red-500">{errors.careTaker.message}</span>}

                                        </label>

                                    </div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
                               
{/* /*************************************************************** */}
                              
{/* ////////////////////////////////////////////////////////////////////////////////////// */}
                                    <div className="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text font-serif  ">Bed Number</span>
                                        </label>
                                        <input  {...register("bedNumber", {
                                            required: {
                                                value: true,
                                                message: 'Bed Number is Required'
                                            },

                                        })} type="number" placeholder="Bed Number" class="input input-sm input-bordered w-full max-w-xs" />

                                        <label class="label">
                                            {errors.bedNumber?.type === 'required' && <span class="label-text-alt text-red-500">{errors.bedNumber.message}</span>}
                                        </label>

                                    </div>

{/* /////////////////////////////////////////////////////////////////////////////////////// */}

                                    <div className="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text font-serif  ">Bed Type</span>
                                        </label>
                                        <select {...register('bedType')} class="input-bordered input-sm select w-full max-w-xs">

                                            <option>Common</option>
                                            <option>AC</option>
                                            <option>Non-AC</option>

                                        </select>

                                        <label class="label">
                                            {errors.bedType?.type === 'required' && <span class="label-text-alt text-red-500">{errors.bedType.message}</span>}
                                        </label>

                                    </div>

                                    <input className='cursor-pointer text-sm p-1 bg-green-800 w-20 text-white rounded-lg max-w-xs mt-4' type="submit" value="Allot" />

                        </form>
                        <label for="delete-confirm-modal" className="bg-red-600 rounded-lg text-sm  text-white p-1 ml-96 cursor-pointer ">Cancel</label>
                        {/* <button onClick={() => handleBedAllotment(BedAllotment.email)} class="btn btn-error btn-xs">Submit</button> */}
                    
                </div>
            </div>
        </div>
    );
};

export default BedAllotmentModal;