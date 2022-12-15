import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import Activity from './components/Admin/Activity';
import AddBooks from './components/Admin/AddBooks';
import AddStudent from './components/Admin/AddStudent';
import AdminHome from './components/Admin/AdminHome';
import IssueRequests from './components/Admin/IssueRequests';
import LoginAdmin from './components/Admin/Login';
import SearchBooks from './components/Admin/SearchBooks';
import SearchStudents from './components/Admin/SearchStudents';
import Settings from './components/Admin/Settings';
import SignUp from './components/Admin/Signup';
import UpdateBook from './components/Admin/UpdateBook';
import ViewStudent from './components/Admin/ViewStudent';
import EBooks from './components/EBooks';
import EJournal from './components/EJournal';
import Footer from './components/Footer';
import Home from './components/Home';
import InstitutionalRepo from './components/InstitutionalRepo';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';
import StudentDash from './components/StudentDash';
function App() {
  return(
    <div>
      <Navbar/>
    
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/profile' element={<StudentDash/>}></Route>
          <Route path='/admindash' element={<adminDash/>}></Route>
          <Route path='/e-journals' element={<EJournal/>}></Route>  
          <Route path='/e-books' element={<EBooks/>}></Route>
          <Route path='/institutional-repository' element={<InstitutionalRepo/>}></Route>

          {/* Admin Route */}
          <Route path='/admin' element = {<AdminHome/>}/>
          <Route path='/admin/issue-requests' element={<IssueRequests/>}></Route>
          <Route path='/admin/add-students' element={<AddStudent/>}></Route>
          <Route path='/admin/add-books' element={<AddBooks/>}></Route>
          <Route path='/admin/activity' element={<Activity/>}></Route>
          <Route path='/admin/search-students' element={<SearchStudents/>}></Route>
          <Route path='/admin/search-books' element={<SearchBooks/>}></Route>
          <Route path='/admin/settings' element={<Settings/>}></Route>
          <Route path='/admin/student/:id' element={<ViewStudent/>}></Route>
          <Route path='/admin/book/:id' element ={<UpdateBook/>}></Route>
          <Route path='/admin/mec/signup'  element= {<SignUp/>}/>
          <Route path='/admin/login' element={<LoginAdmin/>}/>

        </Routes>
      <Footer/>
    </div>
  )
}

export default App;
