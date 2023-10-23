import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Login from "./components/Login.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import Contact from "./pages/Contact.jsx";
import Reminders from "./pages/Reminders.jsx";
import axios from "axios";
import { Context, server } from "./main";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";

function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);
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
         <Toaster />
      </Router> 
    </>
  )
}

export default App
