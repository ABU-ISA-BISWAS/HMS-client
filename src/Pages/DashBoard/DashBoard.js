import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import './Dashboard.css';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import signout from '../../assets/icons/logout.png';
import HospitalIcon from '../../assets/icons/hospital.png';
// import notificationlIcon from '../../assets/icons/notification.png';
import "../../About.css"
import appointment from "../../assets/image/appointment.png"
import review from "../../assets/image/review.png"
import history from "../../assets/image/history.png"
import user from "../../assets/image/user.png"
import patient from "../../assets/image/patient.png"
import doctor from "../../assets/image/doctor.png"
import nurse from "../../assets/image/nurse.png"
import pharmacist from "../../assets/image/pharmacist.png"
import laboratorist from "../../assets/image/laboratorist.png"
import accountant from "../../assets/image/accountant.png"
import receptionist from "../../assets/image/receptionist.png"
import hospital from "../../assets/image/hospital.png"
import payments from "../../assets/image/payments.png"



const DashBoard = () => {
  const [isExpanded, setExpendState] = useState(false);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/');
  };


  return (
  



      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ml-12 mt-4 ">
          {/* <!-- Page content here --> */}
          {user ? <button onClick={logout} className="float-right h-10 w-10 "><img className='w-4 h-4 ' src={signout} alt="aa" /></button> : <></>}
          {/* <div className="indicator float-right mt-2.5 h-2 w-6 mr-3 cursor-pointer">
            <span className="indicator-item badge badge-secondary h-5 w-3 text-white bg-purple-600">1</span>
            <div className="grid   place-items-center"><img src={notificationlIcon} alt="" /></div>
          </div> */}
          <div className='flex '>
            <div className='mr-4'>
              <img className='h-16 w-full' src={HospitalIcon} alt="" />
            </div>
            <div className='mt-2'>
              {!admin ? <h2 className='ml-4 text-4xl font-serif mb-6 text-purple-600 '>Welcome, {user.displayName}</h2> : <h2 className=' text-4xl font-serif text-purple-600 '>Welcome to DashBoard</h2>}
            </div>



          </div>
          <div className='bg-gray-300 h-0.5 mb-12 '></div>
          <Outlet></Outlet>
        </div>

        

{/* 111 */}

<div
			className={
                
				isExpanded
					? "side-nav-container drawer-side"
					: "side-nav-container side-nav-container-NX drawer-side "
			}
		>
      
			<div >
				<div >
				
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
				{isExpanded ?<ul >
                <li className='  font-serif text-xl text-purple-400 p-2 font-semi-bold  mb-2 hover:bg-gray-900'><Link to="/dashboard" >Progress Hospital</Link></li>
                {
                  !admin && <>
                    <li className='text-slate-300 font-serif text-sm mt-3 mb-6 hover:bg-gray-900'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='/dashboard/myAppointment'><span className='ml-2 mr-2'>My Appointments</span></NavLink></li>
                    <li className='text-slate-300 font-serif text-sm mb-6 hover:bg-gray-900'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/review"><span className='ml-2 mr-2'>My Reviews</span></NavLink></li>
                    <li className='text-slate-300 font-serif text-sm mb-6 hover:bg-gray-900'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/history"><span className='ml-2 mr-2'>My History</span></NavLink></li>
                  </>
                }
                {admin && <>

                  <li className='text-slate-300 font-serif text-sm mt-3 mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/users"><span className='ml-2 mr-2  '>All Users</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/patient"><span className='ml-2 mr-2'>Patient</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/doctor"><span className='ml-2 mr-2'>Doctor</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/nurse"><span className='ml-2 mr-2'>Nurse</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/pharmacist"><span className='ml-2 mr-2'>Pharmacist</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/laboratorist"><span className='ml-2 mr-2'>Laboratorist</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/accountant"><span className='ml-2 mr-2'>Accountant</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/receptionist"><span className='ml-2 mr-2'>Receptionist</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><div className="dropdown ">
                    <label tabIndex={0} className=" ml-2 mr-2">Hospital Management 🔻</label>
                    <ul tabIndex={0} className="dropdown-content w-32 mt-1 bg-slate-900 ">
                      <li className='text-slate-300 ml-3 font-serif text-sm  hover:bg-gray-700 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/bedAllotment"><span >Bed Allotment</span></NavLink></li>
                      <li className='text-slate-300 ml-3 font-serif text-sm  hover:bg-gray-700 duration-300'><a>Medicine</a></li>
                      <li className='text-slate-300 ml-3 font-serif text-sm  hover:bg-gray-700 duration-300'><a>Blood Bag</a></li>
                      <li className='text-slate-300 ml-3 font-serif text-sm  hover:bg-gray-700 duration-300'><a>Operation Report</a></li>
                    </ul>
                  </div></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/appointments"><span className='ml-2 mr-2'>Appointments</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/payments"><span className='ml-2 mr-2'>Payments</span></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/invoice"><span className='ml-2 mr-2'>Create Invoice</span></NavLink></li>


                </>
                }


              </ul>:
              
              
              <ul >
                
                {
                  !admin && <>
                    <li className='text-slate-300 font-serif text-sm mt-3 mb-6 hover:bg-gray-900'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='/dashboard/myAppointment'> <img src={appointment} alt="" /> </NavLink></li>
                    <li className='text-slate-300 font-serif text-sm mb-6 hover:bg-gray-900'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/review"><img src={review} alt="" /></NavLink></li>
                    <li className='text-slate-300 font-serif text-sm mb-6 hover:bg-gray-900'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/history"><img src={history} alt="" /></NavLink></li>
                  </>
                }
                {admin && <>

                  <li className='text-slate-300 font-serif text-sm mt-3 mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/users"><img src={user} alt="" /></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/patient"><img src={patient} alt="" /></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/doctor"><img src={doctor} alt="" /></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/nurse"><img src={nurse} alt="" /></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/pharmacist"><img src={pharmacist} alt="" /></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/laboratorist"><img src={laboratorist} alt="" /></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/accountant"><img src={accountant} alt="" /></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/receptionist"><img src={receptionist} alt="" /></NavLink></li>
                  
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/appointments"><img src={appointment} alt="" /></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/payments"><img src={payments} alt="" /></NavLink></li>
                  <li className='text-slate-300  font-serif text-sm mb-4 hover:bg-gray-900 duration-300'><div className="dropdown ">
                    <label tabIndex={0} className=" ml-2 mr-2"><img src={hospital} alt="" /> 🔻</label>
                    <ul tabIndex={0} className="dropdown-content w-32 mt-1 bg-slate-900 ">
                      <li className='text-slate-300 ml-3 font-serif text-sm  hover:bg-gray-700 duration-300'><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboard/bedAllotment"><span >Bed Allotment</span></NavLink></li>
                      <li className='text-slate-300 ml-3 font-serif text-sm  hover:bg-gray-700 duration-300'><a>Medicine</a></li>
                      <li className='text-slate-300 ml-3 font-serif text-sm  hover:bg-gray-700 duration-300'><a>Blood Bag</a></li>
                      <li className='text-slate-300 ml-3 font-serif text-sm  hover:bg-gray-700 duration-300'><a>Operation Report</a></li>
                    </ul>
                  </div></li>
                  


                </>
                }


              </ul>}
				</div>
			</div>
			
		</div>


{/* 111 */}




      </div>


    
  );
};

export default DashBoard;