import React, { useEffect, useState , useContext} from 'react'
import axios from 'axios';
import { server , Context} from '../main';
import toast from 'react-hot-toast';
import { Navigate } from "react-router-dom";
import Loading from '../components/Loading';


const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [refresh , setRefresh] = useState('true');
  const { isAuthenticated , loading  , setLoading} = useContext(Context);
  useEffect(() => {
    const fetchReminders = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${server}/reminder/getAllReminder`, {
          withCredentials: true,
        });
        console.log(data)
        setReminders(data.Reminderlist); // Update the reminders in state
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        // Handle errors here if needed
        setLoading(false);
      }
    };
  
    
    fetchReminders(); // Call the function to fetch reminders
    
  }, [ refresh ]);
  const deleteReminder = async (id) => {
    try {
      const { data } = await axios.delete(`${server}/reminder/delete/${id}`, {
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
    loading ? (
      <Loading />
    ) : (
    <div>
    {reminders.map((reminder) => (
      // Render each reminder item here
      <div key={reminder._id}>
        {reminder.medicationName}
        <button onClick={()=>deleteReminder(reminder._id)}>delete </button>
      </div>
     
    ))}
  </div>
  ))
}

export default Reminders