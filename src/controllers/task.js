const Task = require("../models/task");

class TaskController {
  async createTask (req, res) {
    try{
      const {title, description, dateTime, duration, status} = req.body;
  
      const task = new Task({
        title, 
        description, 
        dateTime, 
        duration, 
        status, 
      });
  
      task.save();

      return res.status(201).json({task});

    }catch(err){
      return res.status(400).json({err});
    }
  
  };

  async getTask (req, res) {
    try{
      let tasks; 
      if (req.params.id) {
        tasks = await Task.findById(req.params.id);
      }else{
        tasks = await Task.find({});
      }

      return res.status(200).json({tasks});

    }catch(err){
      return res.status(400).json({err});
    }
  };
  
  async deleteTask (req, res) {
    try{
      const task = await Task.findOneAndUpdate({_id: req.params.id}, {status: "Deleted"}, {new: true});
    
      return res.status(201).json({task});

    }catch(err){
      return res.status(400).json({err});
    }
  };

  async editTask (req, res) {
    try{
      const task = await Task.findByIdAndUpdate({_id: req.params.id}, {...req.body}, {new: true});

      return res.status(201).json({task});
    }catch(err){
      return res.status(400).json({err});
    }
  };
  
};


module.exports = TaskController;

