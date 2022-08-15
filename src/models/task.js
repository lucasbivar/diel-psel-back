const mongoose = require("mongoose"); 
const { zeroPad } = require("../utils/format");

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
    enum: ["ToDo", "Doing", "Done"],
    default: "ToDo"
  },
  deleted: {
    type: Boolean,
    default: false,
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


taskSchema.virtual("durationToString").get(function(){
  let toString = "";

  let hours = this.duration/60;
  hours = Number(hours.toString().split(".")[0]);
  toString += `${zeroPad(hours, 2)}h `;
  toString += `${zeroPad(this.duration % 60, 2)}m`;
  
  return toString;
});

module.exports = mongoose.model("Task", taskSchema);