const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const reminderController = require('./controllers/reminderController');
const axios = require('axios');


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

// Connecting to database
connectDatabase();




// sendNotifications();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {

  console.log(`Server is working on port: ${process.env.PORT}`);
  
});
// const server = app.listen(process.env.PORT, async () => {
//   console.log(`Server is working on port: ${process.env.PORT}`);

//   try {
//     // Make an HTTP request to trigger the email scheduling route
//     const response = await axios.post('http://localhost:' + process.env.PORT + '/schedule');
//     console.log('Email scheduling response:', response.data);
//   } catch (error) {
//     console.error('Error scheduling email notifications:', error);
//   }
// // });
// async function startServer(app) {
//   try {
//     // Other server setup code

//     // Call the function to schedule email notifications on server startup
//     await reminderController.scheduleEmailNotificationsController();
    
//     // Start the server
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   } catch (error) {
//     console.error('Error starting the server:', error);
//   }
// }

// Start the server when this script is executed
// startServer(app);

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
