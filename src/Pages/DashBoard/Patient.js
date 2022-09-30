import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import remove from '../../assets/icons/delete.png';
import DeletePatientModal from './DeletePatientModal';




const Patient = () => {
  let [Patients, setPatients] = useState([]);
  const [deletingPatient, setDeletingPatient] = useState(null);
  let { data: patients, isLoading, refetch } = useQuery('patients', () => fetch(' http://localhost:5000/patient', {
    headers: {

      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
  }).then(res => res.json()));
  if (isLoading) {
    return <Loading></Loading>
  }

  const handleSearch = e => {
    e.preventDefault();

    const search = e.target.text.value;

    fetch(` http://localhost:5000/patients?name=${search}`)
      .then(res => res.json())
      .then(data => {
        setPatients(data)

      });
    e.target.reset();

  }



  return (
    <div>
      <Link className='bg-yellow-500 border-2 border-yellow-500 rounded-lg p-2' to="/dashboard/addPatient">+ Add Patient</Link>

      <form className='mt-6' onSubmit={handleSearch} >
        <input type="text" name='text' placeholder='Search patient by name' class="w-80   input input-sm input-bordered" />
        <input className='ml-2 btn btn-sm ms-2 btn-primary' type="submit" value="Search" />


      </form>
      {Patients.length === 0 ? <span className='font-semibold text-lg'>Total Patient:{patients.length}</span> : <span className='font-semibold text-lg'>Total Patient:{Patients.length}</span>}
      <div className='mt-4'>
        <table class="overflow-hidden w-11/12 shadow-2xl font-[Poppins] border-2 border-black">

          <thead className='text-white'>
            <tr>
              <th className="bg-slate-900  py-3">S.No</th>
              <th className="bg-slate-900  py-3">Avatar</th>
              <th className="bg-slate-900  py-3">Name</th>
              <th className="bg-slate-900  py-3">Mobile</th>

              <th className="bg-slate-900  py-3">Sex</th>
              <th className="bg-slate-900  py-3">Age</th>
              <th className="bg-slate-900  py-3">Blood</th>
              <th className="bg-slate-900  py-3">Address</th>
              <th className="bg-slate-900  py-3">Remarks</th>
              <th className="bg-slate-900  py-3">Action</th>
            </tr>
          </thead>
          <tbody className='text-cyan-900 text-center'>

            {
              Patients.length === 0 ? patients.map((patient, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
                <td className=' px-6'>{index + 1}</td>
                <td className=' px-6'><div class="avatar">
                  <div class="w-8 m-0 p-0 rounded-full  ring-2 ring-black ">
                    <img src={patient.img} alt='' />
                  </div>
                </div></td>
                <td className=' px-6'>{patient.name}</td>
                <td className=' px-6'>{patient.mobile}</td>

                <td className=' px-6'>{patient.sex}</td>
                <td className=' px-6'>{patient.age}</td>
                <td className=' px-6'>{patient.blood}</td>
                <td className=' px-6'>{patient.address}</td>
                <td className=' px-6'>{patient.remarks}</td>
                <td className=' px-6'>
                  <label onClick={() => setDeletingPatient(patient)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
                </td>
              </tr>)
                : Patients.map((patient, index) => <tr className='border-2 border-black hover:bg-slate-800 bg-slate-700 text-white cursor-pointer duration-300 '>
                  <td className=' px-6'>{index + 1}</td>
                  <td className=' px-6'><div class="avatar">
                    <div class="w-10 m-0 p-0 rounded-full  ring-2 ring-black ">
                      <img src={patient.img} alt='' />
                    </div>
                  </div></td>
                  <td className=' px-6'>{patient.name}</td>
                  <td className=' px-6'>{patient.mobile}</td>

                  <td className=' px-6'>{patient.sex}</td>
                  <td className=' px-6'>{patient.age}</td>
                  <td className=' px-6'>{patient.blood}</td>
                  <td className=' px-6'>{patient.address}</td>
                  <td className=' px-6'>{patient.remarks}</td>
                  <td className=' px-6'>
                    <label onClick={() => setDeletingPatient(patient)} for="delete-confirm-modal" class=" modal-button  btn-xs"><img className='w-6 cursor-pointer' src={remove} alt="" /></label>
                  </td>
                </tr>)
            }

          </tbody>
        </table>
      </div>
      {deletingPatient && <DeletePatientModal
        deletingPatient={deletingPatient}
        setDeletingPatient={setDeletingPatient}
        refetch={refetch}></DeletePatientModal>}
    </div>
  );
};

export default Patient;