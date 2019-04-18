const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
  hosts: {
    type: [String],
    required: true,
    default: [],
  },
  archived: {
    type: Boolean,
    required: true,
    default: false,
  },
}, {
  versionKey: false,
});

module.exports = mongoose.model("Dashboard", DashboardSchema);
