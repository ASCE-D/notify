const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const reminder  = require("../models/reminderModel")

exports.setreminder = catchAsyncErrors(async (req, res, next) => {
    try {
        const { medicinename, remindat } = req.body;
    
        await Task.create({
          title,
          description,
          user: req.user,
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
  
      if (!task) return next(new ErrorHandler("Task not found", 404));
      await task.deleteOne();
  
      res.status(200).json({
        message: "Task Deleted!",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };