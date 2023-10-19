const schedule = require('node-schedule');
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const reminder  = require("../models/reminderModel")
const sendEmail = require("../utils/sendEmail");

exports.setreminder = catchAsyncErrors(async (req, res, next) => {
    try {
        const { medicinename, remindat } = req.body;
    
        await reminder.create({
          title,
          description,
          user: req.user,
          isReminded: false
        });
    
        res.status(201).json({
          success: true,
          message: "Task added Successfully",
        });
      } catch (error) {
        next(error);
      }
  });

  export const reminderlist = async (req, res, next) => {
    try {
      const userid = req.user._id;
  
      const tasks = await reminder.find({ user: userid });
  
      res.status(200).json({
        success: true,
        tasks,
      });
    } catch (error) {
      next(error);
    }
  };

  export const deletereminder = async (req, res, next) => {
    try {
      const task = await reminder.findById(req.params.id);
  
      if (!task) return next(new ErrorHander("Task not found", 404));
      await task.deleteOne();
  
      res.status(200).json({
        message: "Task Deleted!",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };



  exports.remindermail = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
  
    if (!user) {
      return next(new ErrorHander("User not found", 404));
    }
  
    // Get ResetPassword Token
    const resetToken = user.getResetPasswordToken();
  
    await user.save({ validateBeforeSave: false });
    
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;
  
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
  
    try {
      await sendEmail({
        email: user.email,
        subject: `Ecommerce Password Recovery`,
        message,
      });
  
      res.status(200).json({
        success: true,
        message: `Email sent to ${user.email} successfully`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
  
      await user.save({ validateBeforeSave: false });
  
      return next(new ErrorHander(error.message, 500));
    }
  });

  exports.setreminder = catchAsyncErrors(async (req, res, next) => {
    try {
      const { medicinename, remindat } = req.body;
  
      const newReminder = await Reminder.create({
        medicationName: medicinename,
        remindAt: remindat,
        userId: req.user._id,
        isReminded: false,
      });
  
      // Schedule email notification
      const scheduleDate = new Date(remindat); // Convert the remindat string to a Date object
      schedule.scheduleJob(scheduleDate, async () => {
        try {
          const user = req.user; // Assuming you have user details in the request
  
          const transporter = nodemailer.createTransport({
            // Configure your email service provider here
            service: 'YourEmailServiceProvider',
            auth: {
              user: 'your-email@example.com',
              pass: 'your-email-password',
            },
          });
  
          const mailOptions = {
            from: 'your-email@example.com',
            to: user.email,
            subject: 'Medication Reminder',
            text: `Hello ${user.name},\n\nIt's time to take your medication: ${newReminder.medicationName}.`,
          };
  
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.error('Error sending email notification:', error);
            } else {
              console.log('Email notification sent:', info.response);
            }
          });
        } catch (error) {
          console.error('Error scheduling email notification:', error);
        }
      });
  
      res.status(201).json({
        success: true,
        message: 'Task added Successfully',
      });
    } catch (error) {
      next(error);
    }
  });