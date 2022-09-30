import React from 'react';
import { useQuery } from 'react-query';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line } from 'recharts';


const Charts = () => {
  




    const patient = [
        { month: 'January', patient: 140 },
        { month: 'February', patient: 374 },
        { month: 'March', patient: 327 },
        { month: 'April', patient: 380 },
        { month: 'May', patient: 399 },
        { month: 'June', patient: 408 },
        { month: 'July', patient: 300 },
        { month: 'August', patient: 200 },
        { month: 'September', patient: 300 },
        { month: 'October', patient: 240 },
        { month: 'November', patient: 450 },
        { month: 'December', patient: 520 }
    ]
    // const employee = [
       
    //     { category:'Doctor' , total: doctors.length },
    //     { category: 'Nurse', total: nurses.length },
    //     { category: 'Pharmacist', total: pharmacists.length },
    //     { category: 'Laboratorist', total: laboratorists.length },
    //     { category: 'Accountant', total: accountants.length },
    //     { category: 'Receptionist', total:receptionists.length }
       
    // ]



    return (
        <div className='border-2 p-8 border-black w-11/12  mt-6'>
          

            
            <div className=''>
            <p className='text-center text-purple-600 font-serif mb-4 '>Number of patients over current year</p>
            <BarChart className='text-xs' width={900} height={300} data={patient}>
                <XAxis dataKey="month" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={80} wrapperStyle={{ top: 20, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="patient" fill="#8884d8" barSize={20} />
            </BarChart>
            </div>
            {/* <div className=' ml-28'>
            <p className='text-center text-purple-600 font-serif mb-4'>Number of employee</p>
            <LineChart className='text-xs' width={600} height={300} data={employee} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
            </LineChart>
            </div> */}
        </div>
    );
};

export default Charts;