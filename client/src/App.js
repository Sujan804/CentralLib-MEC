import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import EBooks from './components/EBooks';
import EJournal from './components/EJournal';
import Footer from './components/Footer';
import Home from './components/Home';
import InstitutionalRepo from './components/InstitutionalRepo';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp';
import StudentDash from './components/StudentDash';
function App() {
  return(
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/profile' element={<StudentDash/>}></Route>
          <Route path='/admindash' element={<adminDash/>}></Route>
          <Route path='/e-journals' element={<EJournal/>}></Route>
          <Route path='/e-books' element={<EBooks/>}></Route>
          <Route path='/institutional-repository' element={<InstitutionalRepo/>}></Route>

        </Routes>
      <Footer/>
    </div>
  )
}

export default App;
