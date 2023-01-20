import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Homepage from './Pages/Homepage';
import CourseList from './Components/Courses/CourseList';
import TeacherList from './Components/Teachers/TeacherList';
import AddCourse from './Components/Courses/AddCourse';
import AddTeacher from './Components/Teachers/AddTeacher';
import CourseDetails from './Components/Courses/CourseDetails';
import TeacherDetails from './Components/Teachers/TeacherDetails';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/teacher/:id" element={<TeacherDetails />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/addteacher" element={<AddTeacher />} />
          <Route path="/addcourse" element={<AddCourse />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
