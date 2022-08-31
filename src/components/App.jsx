import { Link, Route, Routes, Navigate} from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import Mainpage from '../pages/MainPage/Mainpage'
import Adminpage from '../pages/Admin/Adminpage'
import Grouppage from '../pages/Group/Grouppage'
import Studentspage from '../pages/Students/Studentspage'
import OneStudentpage from '../pages/OneStudent/OneStudentpage'

import { useSelector } from "react-redux";

function App() {

  

  return (
    <>
      <Sidebar/>
      
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/admin" element={<Adminpage/>}/>
        <Route path="/students" element={<Studentspage/>}/>
        <Route path="/students/group/:id" element={<Studentspage/>}/>
        <Route path='/student/:id' element={<OneStudentpage/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
