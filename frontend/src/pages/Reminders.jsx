import React, { useEffect, useState , useContext} from 'react'
import axios from 'axios';
import { server , Context} from '../main';
import toast from 'react-hot-toast';
import { Navigate } from "react-router-dom";


const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [refresh , setRefresh] = useState('true');
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const { data } = await axios.get(`http://localhost:7000/api/v1/reminder/getAllReminder`, {
          withCredentials: true,
        });
        console.log(data)
        setReminders(data.Reminderlist); // Update the reminders in state
     
      } catch (error) {
        console.error('Error:', error);
        // Handle errors here if needed
      }
    };
  
    
    fetchReminders(); // Call the function to fetch reminders
    
  }, [refresh]);
  const deleteReminder = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:7000/api/v1/reminder/delete/${id}`, {
        withCredentials: true,
      });
      console.log(data)
      toast.success(data.message);
      
    } catch (error) {
      toast.error(error.response.data.message);   
    }
    setRefresh((prev) => !prev);
  };
  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return (
    <div>
    {reminders.map((reminder) => (
      // Render each reminder item here
      <div key={reminder._id}>
        {reminder.medicationName}
        <button onClick={()=>deleteReminder(reminder._id)}>delete </button>
      </div>
     
    ))}
  </div>
  )
}

export default Reminders