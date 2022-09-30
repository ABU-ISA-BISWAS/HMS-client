import React from 'react';
import Charts from '../Charts';
import Accountants from './Accountants';
import Doctors from './Doctors';
import Laboratorists from './Laboratorists';
import Nurses from './Nurses';
import './Overview.css'
import Patients from './Patients';
import Pharmacists from './Pharmacists';
import Receptionists from './Receptionists';

const Overview = () => {

  return (
  <div>
      <div className='grid grid-cols-3 gap-2'>
     <Patients></Patients>
     <Doctors></Doctors>
     <Nurses></Nurses>
     <Pharmacists></Pharmacists>
     <Laboratorists></Laboratorists>
     <Accountants></Accountants>
     <Receptionists></Receptionists>
    </div>
    <Charts 
    ></Charts>
    
  </div>
  );
};

export default Overview;