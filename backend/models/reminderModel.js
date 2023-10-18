const mongoose = require('mongoose');

// Define a schema for the Reminders model
const reminderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for associating reminders with users
    required: true,
  },
  medicationName: {
    type: String,
    required: true,
  },
  isReminded: Boolean,
  remindAt: String,
  description: String,
  dosage: String,
  frequency: String, // You can customize this field (e.g., daily, weekly, etc.)
  time: Date, // Store the time as a Date object for scheduling reminders
  // Add more fields as needed for your Reminders model
  // Example: notification preferences (email, SMS, etc.)
});

// Create a Mongoose model from the schema
const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
