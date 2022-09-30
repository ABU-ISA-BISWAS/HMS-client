import React from 'react';
import {signOut} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import HospitalIcon from '../../assets/icons/hospital.png';
import signout from '../../assets/icons/logout.png';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/');
      };
    const menuItems = <>
     
      {
        !admin && user && <>
        
        <li className=' font-serif'><Link to="/home">Home</Link></li>
        
        <li className=' font-serif'><Link to="/appointment">Appointment</Link></li>
        
        <li className=' font-serif'><Link to='/dashboard'>DashBoard</Link></li>
        {user ? <button onClick={logout} className="float-right pt-1.5 ml-12 h-10 w-10 "><img className='w-4 h-4 ' src={signout} alt="aa" /></button> : <></>}
        </>
      }
        
        
        {/* {
            user && <li><Link to='/dashboard'>DashBoard</Link></li>
        } */}
        
    </>
    return (
        <div className="navbar bg-green-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                    </ul>
                </div>
                <img className='h-12 w-14' src={HospitalIcon} alt="" />
                <span className='font-serif font-semibold text-xl text-white'> <Link to="/home">PROGRESS HOSPITAL</Link></span>
            </div>
            <div className="navbar-center h-10 hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
            <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
           
            </div>
        </div>
    );
};

export default Navbar;