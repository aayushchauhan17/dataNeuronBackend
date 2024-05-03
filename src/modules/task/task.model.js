const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const taskSchema = new Schema(
  {
    name: {
      type: String,
    },
    updateCount: {
      type: Number,
      default: 1,
    },
    
  },
  { timestamps: true }
);

module.exports.Task = mongoose.model("Task", taskSchema);
