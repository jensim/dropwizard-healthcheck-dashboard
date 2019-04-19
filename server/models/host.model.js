const mongoose = require("mongoose");

const HostSchema = new mongoose.Schema({
  healthCheckUrl: {
    type: String,
    required: true,
    unique: true,
  },
  hostName: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: false,
  },
  archived: {
    type: Boolean,
    required: true,
    default: false,
  }
}, {
  versionKey: false,
});

module.exports = mongoose.model("Host", HostSchema);
