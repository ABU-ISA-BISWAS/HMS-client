import React from 'react';

import { Link } from 'react-router-dom';




const NoUsNav = () => {
   
    const menuItems = <>

        {
              <> <li className=' font-serif text-white '><Link to="/home">Home</Link></li>   <div className="mt-3 ml-2  dropdown dropdown-hover ">
                <label tabIndex={0} className="   font-serif text-white pt-4">Login</label>
                <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-blue-200  w-40">
                    <li><Link to="/login">User Login</Link></li>
                    <li><Link to="/adminLogin">Admin Login</Link></li>
                </ul>
            </div> </>
        }


     

    </>
    return (
        <div className="navbar bg-blue-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 text-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                
                <span className='font-serif font-semibold text-xl text-white'> <Link to="/home">HOSPITAL</Link></span>
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
export default NoUsNav;