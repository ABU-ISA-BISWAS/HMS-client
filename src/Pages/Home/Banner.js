import React from 'react';
import { Link } from 'react-router-dom';
import a from '../../assets/images/1.jpg';
import b from '../../assets/images/2.jpg';
import c from '../../assets/images/3.jpg';
import d from '../../assets/images/4.jpg';

const Banner = () => {
    return (
        <div>
                   <div>
<div className="carousel w-full h-80">
<div id="item1" className="carousel-item w-full">
<img src={a} className="w-full" />
</div> 
<div id="item2" className="carousel-item w-full">
<img src={b} className="w-full" />
</div> 
<div id="item3" className="carousel-item w-full">
<img src={c} className="w-full " />
</div> 
<div id="item4" className="carousel-item w-full">
<img src={d} className="w-full" />
</div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
<a href="#item1" className="btn btn-xs">1</a> 
<a href="#item2" className="btn btn-xs">2</a> 
<a href="#item3" className="btn btn-xs">3</a> 
<a href="#item4" className="btn btn-xs">4</a>
</div>
</div>
            <div className="hero min-h-screen ">
            
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src= "https://i.ibb.co/Z1CrHx2/young-female-doctor-posing-corridor-hospital.jpg" className="min-w-sm w-80 rounded-lg shadow-2xl" />
                <div>
                    <h1 className='text-6xl font-thin  font-mono text-green-600 mb-4'>Progress Hospital</h1>
                    <h1 className="text-2xl font-semibold">Your New Smile Start Here</h1>
                    
                    <button className="btn mt-4 btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to primary"> <Link to="/appointment">Get Started</Link> </button>
                </div>
            </div>
        </div>

 

        </div>
    );
};

export default Banner;