import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import Mainpage from "../pages/MainPage/Mainpage";
import Adminpage from "../pages/Admin/Adminpage";
import Studentspage from "../pages/Students/Studentspage";
import OneStudentpage from "../pages/OneStudent/OneStudentpage";
import Aboutpage from "../pages/About/Aboutpage";

function App() {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/students" element={<Studentspage />} />
        <Route path="/students/group/:id" element={<Studentspage />} />
        <Route path="/student/:id" element={<OneStudentpage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
