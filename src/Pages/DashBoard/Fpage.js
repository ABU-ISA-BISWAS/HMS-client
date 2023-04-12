import React from 'react';
import { Link } from 'react-router-dom';
import "../Login/Login.css"
import Navbar from '../Shared/Navbar';
import user from "../../assets/images/user-logo.png"
import admin from "../../assets/images/admin-logo.png"

const Fpage = () => {
    return (
        <div className='fpage  h-screen'>
            <Navbar></Navbar>
       <div className='flex  box gap-8 '>
        <div className='bg-slate-900 h-48 w-48 box-child rounded-md'> <img className='logo ' src={user} alt="" /> <span className='title '><Link to="/login" >User Login</Link></span></div>
        <div className='bg-slate-800 h-48 w-48 box-child rounded-md'> <img className='logo ' src={admin} alt="" /><span className='title2 text-gray-200 font-bold text:lg-3xl text-2xl ml-1'><Link to="/adminLogin" >Admin Login</Link></span> </div>
       </div>

        </div>
    );
};

export default Fpage;