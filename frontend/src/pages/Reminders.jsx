import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../main';
const Reminders = () => {
  const [reminders, setReminders] = useState([]);

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
    
  }, []);

  return (
    <div>
    {reminders.map((reminder) => (
      // Render each reminder item here
      <div key={reminder.id}>
        {reminder.medicationName}
        <button>delete </button>
      </div>
     
    ))}
  </div>
  )
}

export default Reminders