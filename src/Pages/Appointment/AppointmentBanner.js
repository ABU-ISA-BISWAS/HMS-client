import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date,setDate}) => {
   
    return (
       <div>
        <h1 className='text-center mt-6 text-4xl text-blue-600  font-serif'>Make An Appointment Today</h1>
         <div class="hero min-h-screen ">
            
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='sm:w-1/3 lg:h-92' src="https://i.ibb.co/4scwSbk/hms.png" alt="" class="max-w-sm rounded-lg shadow-xl" />
                <div className='border-2 border-blue-400'>
                  <DayPicker
                   mode="single"
                   selected={date}
                   onSelect={setDate}
                  />
                
                </div>
            </div>
            
        </div>
       </div>
    );
};

export default AppointmentBanner;