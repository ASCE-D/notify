const schedule = require('node-schedule');
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const reminder = require("../models/reminderModel")
const sendEmail = require("../utils/sendEmail");

// exports.setreminder = catchAsyncErrors(async (req, res, next) => {
//   try {
//     const { medicationName, remindAt } = req.body;
//     console.log(req.user)
//     await reminder.create({
//       medicationName,
//       remindAt,
//       userId: req.user._id,
//       isReminded: false
//     });

//     res.status(201).json({
//       success: true,
//       message: "Task added Successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// });

exports.reminderlist = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const tasks = await reminder.find({ user: userId });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

exports.deletereminder = async (req, res, next) => {
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



// exports.remindermail = catchAsyncErrors(async (req, res, next) => {
//   const user = await User.findOne({ email: req.body.email });

//   if (!user) {
//     return next(new ErrorHander("User not found", 404));
//   }

//   // Get ResetPassword Token
//   const resetToken = user.getResetPasswordToken();

//   await user.save({ validateBeforeSave: false });

//   const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;

//   const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

//   try {
//     await sendEmail({
//       email: user.email,
//       subject: `Ecommerce Password Recovery`,
//       message,
//     });

//     res.status(200).json({
//       success: true,
//       message: `Email sent to ${user.email} successfully`,
//     });
//   } catch (error) {
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save({ validateBeforeSave: false });

//     return next(new ErrorHander(error.message, 500));
//   }
// });

exports.setreminder = catchAsyncErrors(async (req, res, next) => {
  try {
    const { medicationName, remindAt } = req.body;
    const user = req.user;
    "2015-03-25T12:00:00Z+5:30"

    if (!user) {
      return next(new ErrorHander("Please log in to access this resource", 404));
    }
    const message = `Hello ${user.name},\n\nIt's time to take your medication: ${medicationName}.`;
    // Schedule the job
    schedule.scheduleJob(`*/1 13  * *`, async () => {
      try {
        console.log(`Email sent to ${user.email} successfully`);
        await sendEmail({
          email: user.email,
          subject: `Medication Reminder`,
          message,
        });

        
        res.status(201).json({
          success: true,
          message: "I ran"
        })
      } catch (error) {
        console.error('Error sending email notification:', error);
      }
    });
  } catch (error) {

  }
});



