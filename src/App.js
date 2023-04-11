import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import auth from './firebase.init';
import useAdmin from './hooks/useAdmin';
import Appointment from './Pages/Appointment/Appointment';
import Accountant from './Pages/DashBoard/Accountant';
import AddAccountant from './Pages/DashBoard/AddAccountant';
import AddDoctor from './Pages/DashBoard/AddDoctor';
import AddLaboratorist from './Pages/DashBoard/AddLaboratorist';
import AddNurse from './Pages/DashBoard/AddNurse';
import AddPatient from './Pages/DashBoard/AddPatient';
import AddPharmacist from './Pages/DashBoard/AddPharmacist';
import AddReceptionist from './Pages/DashBoard/AddReceptionist';
import Appointments from './Pages/DashBoard/Appointments';
import BedAllotment from './Pages/DashBoard/BedAllotment';
import BedManagement from './Pages/DashBoard/BedManagement';
import DashBoard from './Pages/DashBoard/DashBoard';
import Doctor from './Pages/DashBoard/Doctor';
import Laboratorist from './Pages/DashBoard/Laboratorist';
import MyAppointments from './Pages/DashBoard/MyAppointments';
import MyHistory from './Pages/DashBoard/MyHistory';
import MyReview from './Pages/DashBoard/MyReview';
import Nurse from './Pages/DashBoard/Nurse';
import Overview from './Pages/DashBoard/Overview/Overview';
import Patient from './Pages/DashBoard/Patient';
import Payment from './Pages/DashBoard/Payment';
import Payments from './Pages/DashBoard/Payments';
import Pharmacist from './Pages/DashBoard/Pharmacist';
import Receptionist from './Pages/DashBoard/Receptionist';
import Users from './Pages/DashBoard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import About from './About';



function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    
    <div className=''>
      
      {user && !admin && <Navbar></Navbar>}
      <Routes>
       {
        !admin &&  <Route path='/home' element={<Home></Home>}></Route>
       }
       {
        !admin && <Route path='/about' element={<About></About>}></Route>
       }
       {
        !admin && <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
       }
       
        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
{
  admin && <Route index element={<Overview></Overview>}></Route>
}
{
  !admin && <Route index element={<MyAppointments></MyAppointments>}></Route>
}

         
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='myAppointment' element={<MyAppointments></MyAppointments>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='addPatient' element={<RequireAdmin><AddPatient></AddPatient></RequireAdmin>}></Route>
          
          <Route path='addNurse' element={<RequireAdmin> <AddNurse></AddNurse>   </RequireAdmin>}></Route>
          <Route path='addPharmacist' element={<RequireAdmin> <AddPharmacist></AddPharmacist> </RequireAdmin>}></Route>
          <Route path='addLaboratorist' element={<RequireAdmin>  <AddLaboratorist></AddLaboratorist>  </RequireAdmin>}></Route>
          <Route path='addAccountant' element={<RequireAdmin>  <AddAccountant></AddAccountant>  </RequireAdmin>}></Route>
          <Route path='addReceptionist' element={<RequireAdmin> <AddReceptionist></AddReceptionist> </RequireAdmin>}></Route>
          
          <Route path='patient' element={<RequireAdmin><Patient></Patient></RequireAdmin>}></Route>
          <Route path='doctor' element={<RequireAdmin><Doctor></Doctor></RequireAdmin>}></Route>
          <Route path='nurse' element={<RequireAdmin><Nurse></Nurse></RequireAdmin>}></Route>
          <Route path='pharmacist' element={<RequireAdmin><Pharmacist></Pharmacist></RequireAdmin>}></Route>
          <Route path='laboratorist' element={<RequireAdmin><Laboratorist></Laboratorist></RequireAdmin>}></Route>
          <Route path='accountant' element={<RequireAdmin><Accountant></Accountant></RequireAdmin>}></Route>
          <Route path='receptionist' element={<RequireAdmin><Receptionist></Receptionist></RequireAdmin>}></Route>
          <Route path='payments' element={<RequireAdmin><Payments></Payments></RequireAdmin>}></Route>
          <Route path='appointments' element={<RequireAdmin><Appointments></Appointments></RequireAdmin>}></Route>
          <Route path='bedManagement' element={<RequireAdmin><BedManagement></BedManagement></RequireAdmin>}></Route>
          <Route path='bedAllotment' element={<RequireAdmin><BedAllotment></BedAllotment></RequireAdmin>}></Route>
          
        </Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
