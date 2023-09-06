import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Course from './pages/Course/Course';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { useDisclosure } from '@chakra-ui/react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="App">
      <Routes>
        <Route path="/education/admin" element={<Admin/>}></Route>
        <Route
          path="/"
          element={
            <>
              <Navbar onOpen={onOpen}/>
              <Home onClose={onClose} isOpen={isOpen}/>
              <Footer />
            </>
          }
        >
          <Route
            path="about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="contact"
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route
            path="course"
            element={
              <>
                <Course />
              </>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
