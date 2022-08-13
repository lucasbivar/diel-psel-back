const mongoose = require("mongoose"); 

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },
  description: { 
    type: String, 
    required: true, 
    trim: true 
  },
  dateTime: { 
    type: Date, 
    required: true 
  },
  duration: {
    type: Number,
    required: true
  },
  status: { 
    type: String,
    enum: ["ToDo", "Doing", "Done", "Deleted"],
    default: "ToDo"
  },
  deletedTime: {
    type: Date,
  },
  updatedAt: Date,
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model("Task", taskSchema);