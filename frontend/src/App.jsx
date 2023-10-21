import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Login from "./components/Login.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import Contact from "./pages/Contact.jsx";
import Reminders from "./pages/Reminders.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path='/contact' element={<Contact />} />
          <Route path="/reminders" element={<Reminders />} />
        </Routes>
         <Footer /> 
      </Router> 
    </>
  )
}

export default App
